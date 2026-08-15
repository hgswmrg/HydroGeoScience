import React from 'react';
import { getProducts } from '@backend/sanity-utils';
import ProductCard from '@components/ProductCard';

export default async function Products() {
  // Fetch products data
  const productsData = await getProducts();

  return (
    <section className="w-full h-full flex flex-col items-start px-5 md:px-20 mb-20">
      <div className="mt-20 md:mt-32 w-full flex flex-col md:p-5">
        <p className="font-bold text-2xl md:text-5xl 2xl:text-6xl text-primary-darkgreen">
          Our Work Products
        </p>
        <hr className="mt-2 h-0.5 bg-primary-darkblue" />
      </div>

      {/* Render Product Cards — one per row so the cover images stay large and
          readable. Switch to a grid if the product list grows past ~10. */}
      <div className="flex flex-col gap-12 md:gap-16 mt-10 w-full">
        {productsData.map((product, index) => (
          <ProductCard key={product._id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
