"use client";
import Product from "~/components/Product";
import { Input } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SearchModalRoute() {
  return (
    <div className="max-w-[1380px] mx-auto px-4 md:px-8 flex flex-col gap-16 py-8">
      <div className="flex">
        <Input
          label="Search"
          isClearable
          radius="md"
          placeholder="Gorras, Zapatos, Sneakers..."
          startContent={
            <Icon
              icon="mynaui:search"
              width={24}
              className="text-black/50 dark:text-white/90 pointer-events-none flex-shrink-0"
            />
          }
        />
      </div>
      <section className="grid grid-cols-4 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
}
