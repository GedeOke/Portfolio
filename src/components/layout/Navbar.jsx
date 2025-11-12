import { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import itemNavbar from "../../utils/itemNavbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(!open);

  return (
    <div>
      <div className="flex justify-between px-5 py-3 items-center bg-slate-900 text-white">
        {/* Logo dan Nama */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
            <FaBrain className="text-xl" />
          </div>
          <div>
            <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gede Oke
            </p>
            <p className="text-xs text-gray-400">
              AI & Machine Learning Enthusiast | Passionate about innovation and learning
            </p>
          </div>
        </div>

        {/* Icon menu mobile */}
        <div className="text-4xl hover:cursor-pointer md:hidden">
          {!open ? <IoMenu onClick={openDrawer} /> : <IoClose onClick={openDrawer} />}
        </div>

        {/* Menu desktop */}
        <div className="md:flex space-x-5 hidden">
          {itemNavbar.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="px-3 hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Menu mobile dropdown */}
      <div
        className={`bg-slate-800 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 md:hidden">
          {itemNavbar.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="px-5 py-2 text-white hover:bg-slate-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
