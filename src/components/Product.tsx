import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { IProduct } from "~/types/product";

const Product = ({}: IProduct) => {
  return (
    <Link href="/products" className="max-w-[32rem] flex flex-col h-[36rem]">
      <div className="bg-gray-100 border rounded-lg flex-1 flex items-center justify-center hover:shadow-md hover:shadow-gray-200 transition-all duration-300">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/008/532/936/small_2x/black-cap-mockup-cutout-file-png.png"
          alt="product example"
          className=""
          width={200}
          height={200}
        />
      </div>
      <section className="mt-4 flex items-center justify-between gap-4">
        <h6 className="text-sm">Audio Arrogace AuralElite</h6>
        <span className="text-gray-400 text-sm">$248.00</span>
      </section>
    </Link>
  );
};

export default Product;
