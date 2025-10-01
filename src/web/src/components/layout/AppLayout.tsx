// src/components/layout/AppLayout.tsx
import { Outlet, Link } from "react-router-dom";
import Logo from "@/assets/logos/gramya-stay.png";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-green-100 via-green-300 to-green-700">
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center  text-white shadow">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-2 px-2">
          <img src={Logo} alt="Gramya Stay Logo" className="h-10 w-35" />
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg font-semibold tracking-wide">
          <Link to="/" className="hover:text-brandBrown transition">Home</Link>
          <Link to="/about" className="hover:text-brandBrown transition">About</Link>
          <Link to="/rooms" className="hover:text-brandBrown transition">Rooms</Link>
          <Link to="/contact" className="hover:text-brandBrown transition">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className=" p-6 text-center text-white font-light tracking-wide">
        <p>© {new Date().getFullYear()} Gramya Stay. All rights reserved.</p>
        <p className="text-sm mt-2">
          Workation in the Heart of Nature 🌿
        </p>
      </footer>
    </div>
  );
}