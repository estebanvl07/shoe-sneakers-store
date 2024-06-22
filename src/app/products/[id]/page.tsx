"use client";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Image from "next/image";
import Product from "~/components/Product";
import clsx from "clsx";

const ProductsPage = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="max-w-[1500px] h-full w-full mx-auto">
      <div className="flex gap-6 w-full h-full py-4 px-6 text-sm mb-24">
        <aside
          className={clsx(
            "flex flex-col justify-end items-start gap-4 max-w-[22rem] w-full relative"
          )}
        >
          <div
            className={clsx("w-full max-w-[22rem]", {
              "fixed top-[50%] -translate-y-[50%]": isFixed,
            })}
          >
            <span>Sneakers</span>
            <h3 className="font-medium">Pinnacle Posh Pack</h3>
            <p className="w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              dolorem neque commodi consequatur perferendis maiores cum nam
              provident, facilis quis saepe, voluptate, sapiente cupiditate
              officiis magni obcaecati eveniet in nisi velit! Reiciendis.
            </p>

            <Accordion selectionMode="multiple">
              <AccordionItem
                key="1"
                style={{
                  alignItems: "start",
                }}
                aria-label="Product Information"
                title="Product Information"
              >
                <div className="grid grid-cols-2 gap-2 [&>div>span]:font-semibold">
                  <div>
                    <span>Material</span>
                    <p>Leather</p>
                  </div>
                  <div>
                    <span>Size</span>
                    <p>-</p>
                  </div>
                  <div>
                    <span>Colors</span>
                    <p>-</p>
                  </div>
                  <div>
                    <span>From</span>
                    <p>-</p>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Shipping & Returns"
                title="Shipping & Returns"
              >
                <div className="flex flex-col gap-6 [&>div>span]:font-semibold">
                  <div>
                    <span>Entrega rápida</span>
                    <p>
                      Su paquete llegará en 3-5 días hábiles a su lugar de
                      recogida o a la comodidad de su hogar.
                    </p>
                  </div>
                  {/* <div>
                    <span>Intercambios simples</span>
                    <p>
                      ¿El ajuste no es del todo correcto? No te preocupes:
                      cambiaremos tu producto por uno nuevo.
                    </p>
                  </div> */}
                  <div>
                    <span>Devoluciones fáciles</span>
                    <p>
                      Simplemente devuelva su producto y le reembolsaremos su
                      dinero. Sin preguntas: haremos todo lo posible para
                      asegurarnos de que su devolución sea sin complicaciones.
                    </p>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </aside>
        <div className="bg-gray-100 flex-grow w-full border rounded-xl h-full flex justify-center items-center">
          <Image
            src="https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&w=828&q=75"
            alt="product example"
            className="w-full"
            width={400}
            height={400}
          />
        </div>
        <aside className="flex flex-col justify-end items-center gap-4 max-w-[22rem] w-full relative">
          <div
            className={clsx("flex flex-col gap-4 w-full max-w-[22rem]", {
              "fixed top-[50%] right-auto -translate-y-[50%]": isFixed,
            })}
          >
            <span>Select Color</span>
            <div className="flex gap-2">
              <Button>Black</Button>
              <Button>White</Button>
            </div>
            <span>Select size</span>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" radius="full">
                39
              </Button>
              <Button size="sm" radius="full">
                37
              </Button>
              <Button size="sm" radius="full">
                40
              </Button>
              <Button size="sm" radius="full">
                41
              </Button>
              <Button size="sm" radius="full">
                42
              </Button>
            </div>
            <hr className="w-full" />
            <h3 className="font-semibold">
              <span className="text-sm font-normal">DESDE</span> $405.000 COP
            </h3>
            <div className="flex gap-2">
              <Button color="primary" className="w-full">
                Agregar al carrito
              </Button>
              <Button color="primary" className="w-full">
                Hacer pedido
              </Button>
            </div>
          </div>
        </aside>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2 mb-24">
        <span>Productos relacionados</span>
        <h2>Quizás también quieras consultar estos productos.</h2>
        <div className="w-full grid grid-cols-4 gap-4 mt-8">
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
