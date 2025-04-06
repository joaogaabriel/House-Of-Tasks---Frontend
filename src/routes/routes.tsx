import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
