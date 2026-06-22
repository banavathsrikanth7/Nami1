import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/10 z-50 shadow-sm">
      <div className="flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Nami
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li className="border-2 p-3 rounded-2xl hover:border-yellow-400">
            <a href="/">Home</a>
          </li>

          <li className="border-2 p-3 rounded-2xl hover:border-yellow-400">
            <a href="/history">History</a>
          </li>

          <li className="border-2 p-3 rounded-2xl hover:border-yellow-400">
            <a href="/login">Login</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">

            <li className="border-2 p-3 rounded-2xl hover:border-yellow-400">
              <a href="/">Home</a>
            </li>

            <li className="border-2 p-3 rounded-2xl hover:border-yellow-400">
              <a href="/history">History</a>
            </li>

            <li className="border-2 p-3 rounded-2xl hover:border-yellow-400">
              <a href="/login">Login</a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}