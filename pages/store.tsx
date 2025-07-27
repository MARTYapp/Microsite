import Link from "next/link";
import { products } from "@/data/products"; // assumes product data lives here

export default function Store() {
  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
        WHAT MARTY’S INTO
      </h1>
      <p className="text-xl mb-2 leading-snug">
        WEAR IT. <br /> READ IT. <br /> USE IT.
      </p>
      <p className="mb-10 text-lg text-gray-300 max-w-2xl">
        Real tools, real style, real talk.
        <br />
        Picked with purpose. No fluff. All function.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="block group border border-gray-800 hover:border-white p-6 rounded-md transition-colors"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain mb-4 transition-transform group-hover:scale-105"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400 text-sm mt-1">{product.description}</p>
            <p className="text-white font-bold mt-2">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
