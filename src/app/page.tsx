import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import Product from "~/components/Product";
import { ProductSection } from "~/components/ProductSection";

export default function Home() {
  return (
    <>
      <article className="min-h-52 flex w-full px-6 py-10 justify-center bg-gray-100 items-start flex-col max-h-[26rem] h-[26rem]">       
        <Chip color="primary" size="sm" className="mb-2">Accesorios para cada ocasión</Chip>
        <h2 className="font-semibold mb-4 text-3xl">
          <span className="!text-primary">COMPLETA TU LOOK,</span> <br />
          ENCUENTRA TUS ACCESORIOS FAVORITOS
        </h2>
        <nav className="flex gap-2 items-center">
          <Button color="primary">
            Ver Tendencias
          </Button>
          <Button color="primary" variant="flat">
            Más vendidos
          </Button>
        </nav>
      </article>
      <ProductSection
        title="Nueva Colección"
        products={[]}
        redirectTo="#"
      />
    </>
  );    
}
