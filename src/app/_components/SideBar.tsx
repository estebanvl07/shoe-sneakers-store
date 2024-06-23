"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {

  const [activeBar, setActiveBar] = useState(false)

  return (
    <>
      <button onClick={() => setActiveBar(!activeBar)}>
        <Icon icon="iconamoon:menu-burger-horizontal" width={24} />
      </button>
      {
        activeBar &&
        <div className="fixed left-2 top-2 bottom-2 w-[26rem] h-[clac(100vh-0.5rem)] rounded-xl bg-black/50 backdrop-blur-2xl p-6">
          <button className="absolute top-4 right-4" onClick={() => setActiveBar(false)}>
            <Icon icon="heroicons:x-mark-16-solid" width={24} className="text-white" />
          </button>
          <ul className="flex-grow h-full flex flex-col items-start justify-center [&>li]:text-2xl [&>li]:text-white [&>li]:font-semibold hover:[&>li]:translate-x-4 [&>li]:transition-all fade gap-4">
            <li>
              <Link href="/account" className={clsx({})}>Inicio</Link>
            </li>
            <li>
              <Link href="/search">Buscar</Link>
            </li>
            <li>
              <Link href="/products">Productos</Link>
            </li>
            <li>
              <Link href="/account">Cuenta</Link>
            </li>
            <li>
              <Link href="/account">Carrito</Link>
            </li>
          </ul>
          <footer className="flex">
            <span className="text-xs text-white">© 2024 Basic Style. All rights reserved.</span>
          </footer>
        </div>
      }
    </>
  );
};

export default SideBar;
