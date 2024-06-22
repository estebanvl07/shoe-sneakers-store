import React from "react";
import { Input } from "@nextui-org/react";
import Product from "~/components/Product";

const Searcher = () => {
  return (
    <div className="w-full absolute bg-white/20 backdrop-blur-sm min-h-screen h-full flex flex-col">
      <div className="max-w-[52rem] w-full mx-auto">
        <Input />
        <ul>
          <li>
            <Product />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Searcher;
