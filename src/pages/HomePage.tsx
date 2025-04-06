import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlotProps,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { randomInt } from "@mui/x-data-grid-generator";
import { TaskService } from "../services/tasks/TaskService";
import { Task } from "../types/task";
import { useUserContext } from "../contexts/UserConext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

declare module "@mui/x-data-grid" {
  interface ToolbarPropsOverrides {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
      newModel: (oldModel: GridRowModesModel) => GridRowModesModel
    ) => void;
  }
}

function EditToolbar(props: GridSlotProps["toolbar"]) {
  const { setRows, setRowModesModel } = props;

  const handleClick = async () => {
    const id = randomInt(0, 1000);
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        title: "",
        description: "",
        status: "",
        userId: "1",
        categoryId: "",
        tags: "",
        comment: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "title" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="secondary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Task
      </Button>
    </GridToolbarContainer>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  const { user } = useUserContext();
  const { isAuthenticated } = useAuthContext();

  const [rows, setRows] = React.useState<Task[]>([]);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (user) {
          const result = await TaskService.getAllByUserId(user.id);
          console.log(result);

          if (Array.isArray(result)) {
            setRows(result);
          } else {
            throw result;
          }
        }
      } catch (err) {
        console.error("Erro ao buscar tarefas:", err);
      }
    };

    fetchTasks();
  }, []);

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    try {
      await TaskService.remove(id);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    try {
      let updatedRow: Task;
      if (newRow.isNew) {
        const data = await TaskService.create(newRow);

        updatedRow = { ...data, isNew: false };

        setRows((prevRows) => [
          ...prevRows.filter((r) => r.id !== newRow.id),
          updatedRow,
        ]);
      } else {
        const data = await TaskService.update(newRow.id, newRow);
        updatedRow = data;

        setRows((prevRows) =>
          prevRows.map((row) => (row.id === newRow.id ? updatedRow : row))
        );
      }

      return updatedRow;
    } catch (error) {
      console.error("Erro ao salvar tarefa:", error);
      throw error;
    }
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const safeSetRows = (
    updater: (
      oldRows: readonly GridValidRowModel[]
    ) => readonly GridValidRowModel[]
  ) => {
    setRows((old) => updater(old) as Task[]);
  };

  let columns: GridColDef[] = [
    { field: "id", width: 50, editable: true },
    { field: "title", display: "flex", flex: 1, editable: true },
    { field: "description", display: "flex", flex: 1, editable: true },
    {
      field: "status",
      type: "singleSelect",
      valueOptions: ["PENDING", "IN_PROGRESS", "COMPLETED"],
      width: 100,
      editable: true,
    },
    { field: "userId", width: 100, editable: true },
    { field: "categoryId", width: 100, editable: true },
    { field: "tags", width: 200, editable: true },
    { field: "comment", display: "flex", flex: 1, editable: true },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          console.log("id", id);
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: "white" }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon sx={{ color: "white" }} />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon sx={{ color: "white" }} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        "& .actions": { color: "text.secondary" },
        "& .textPrimary": { color: "text.primary" },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{ toolbar: EditToolbar }}
        slotProps={{
          toolbar: {
            setRows: safeSetRows,
            setRowModesModel,
          },
        }}
      />
    </Box>
  );
}
