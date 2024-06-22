import Link from "next/link"
import type { IProduct } from "~/types/product"
import Product from "./Product"

interface ProductSectionProps {
    products: IProduct[],
    title: string,
    redirectTo: string
}

export const ProductSection = ({ products, title, redirectTo }: ProductSectionProps) => {
    return (
        <section className="px-6 py-4">
            <header className="flex justify-between items-center">
                <h2>{title}</h2>
                {redirectTo && <Link href={redirectTo} className="text-primary">Ver todo</Link>}
            </header>
            {
                products.length === 0 ? <p>No se encontraron productos en esta sección</p> :
                <ul className="grid md:grid-cols-3 lg:grid-cols-4 mt-4">
                    {products.map((prod) => <Product {...prod} />)}
                </ul>
            }
        </section>
    )
}