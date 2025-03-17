import React from 'react';
import { getProducts } from '@backend/sanity-utils';
import ProductCard from '@components/ProductCard';

export default async function Products() {
  // Fetch products data
  const productsData = await getProducts();

  const textforgroup = "The laboratory members advance the knowledge on material (water & solute) transport in deep and shallow earth’s compartments to inform science-based watershed management strategies. They also develop new physics-informed statistical machine-learning models to infer relevant patterns and processes from big data. The research group members receive full support to obtain high-level professional development and to achieve their career goals and dreams. Our group members have already received prestigious scholarships and fellowships. In addition, our group alumni have already landed high-level jobs in environmental and statistical agencies or continued their graduate studies in top-ranked Universities.";

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
