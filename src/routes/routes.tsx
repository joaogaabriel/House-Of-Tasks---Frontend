import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import TasksPage from "../pages/TasksPage";
import CategoriesPage from "../pages/CategoriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage></AuthPage>,
    children: [
      {
        index: true,
        path: "/login",
        element: <LoginPage />,
      },
      { path: "/tasks", element: <TasksPage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />
}
