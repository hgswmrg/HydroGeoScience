import React from 'react';
import { getProducts } from '@backend/sanity-utils';
import ProductCard from '@components/ProductCard';

export default async function Products() {
  // Fetch products data
  const productsData = await getProducts();

  const textforgroup = "";

  return (
    <section className="w-full h-full flex flex-col items-start px-5 md:px-20 mb-80">
      <div className="mt-20 md:mt-32 w-full flex flex-col md:p-5">
        <p className="font-bold text-2xl md:text-5xl text-primary-darkgreen 2xl:mb-5">
          Our Work Products
        </p>
        <p className="font-normal text-sm md:text-base mt-5 text-black 2xl:text-2xl 2xl:mb-10">
          {textforgroup}
        </p>
      </div>
      
      {/* Render Product Cards */}
      <div className="flex flex-wrap gap-5 mt-10 w-full">
        {productsData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
