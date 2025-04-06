import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

export default function AuthPage() {
  return (
    <AuthProvider>
      <Outlet></Outlet>
    </AuthProvider>
  );
}
