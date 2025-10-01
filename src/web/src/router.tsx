import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,   // Navbar + Outlet + Footer
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);
