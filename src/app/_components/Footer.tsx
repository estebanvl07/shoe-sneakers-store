import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 py-20 border-t">
      <div className="max-w-[1440px] flex flex-col gap-32 mx-auto w-full">
        <div className="flex justify-between">
          <h2 className="font-medium">SNEAKERS STORE</h2>
          <div className="flex gap-16 [&>div>span]:font-semibold">
            <div>
              <span>Categorías</span>
              <ul className="flex flex-1 flex-col mt-4 gap-2">
                <li>
                  <span>Nike</span>
                </li>
                <li>
                  <span>Adidas</span>
                </li>
                <li>
                  <span>Converse</span>
                </li>
                <li>
                  <span>Compus</span>
                </li>
                <li>
                  <span>Rebook</span>
                </li>
              </ul>
            </div>
            <div>
              <span>Redes sociales</span>
              <ul className="flex flex-1 flex-col mt-4 gap-2">
                <li>
                  <span>Facebook</span>
                </li>
                <li>
                  <span>Instagram</span>
                </li>
                <li>
                  <span>X</span>
                </li>
              </ul>
            </div>
            <div>
              <span>Nosotros</span>
              <ul className="flex flex-1 flex-col mt-4 gap-2">
                <li>
                  <span>Contáctanos</span>
                </li>
                <li>
                  <span>Sobre nosotros</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <aside className="flex items-center justify-between">
          <span className="text-gray-400">
            © 2024 Sneakers Store. All rights reserved.
          </span>
          <div>Echo con 💗</div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
