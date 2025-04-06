import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthPage from "../pages/AuthPage";

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
      { path: "/home", element: <HomePage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
