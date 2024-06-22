import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed h-16 z-10 bg-white border-b w-full">
      <nav className="max-w-[1440px] h-full flex items-center justify-between px-6 mx-auto">
        <div className="flex-1">
          <button>Menu</button>
        </div>

        <Link
          href="/"
          className="text-lg uppercase text-gray-600 hover:text-black font-semibold"
        >
          Sneakers Store
        </Link>

        <div className="flex-1 h-full flex justify-end">
          <ul className="flex gap-4 items-center justify-end">
            <li>
              <Link href="/search">Buscar</Link>
            </li>
            <li>
              <Link href="/account">Cuenta</Link>
            </li>
            <li>
              <Link href="/">Carrito</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
