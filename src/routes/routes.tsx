import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />
}
