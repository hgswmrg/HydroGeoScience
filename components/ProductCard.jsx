import React from 'react';
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
    const imageUrl = product.image?.asset?.url; 
    //console.log(product);
  return (
    <div key={product._id} className="product-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 duration-300">
      <Link href={product.link} passHref>
    
      <Image className="p-5 mt-10" src={product.image} width={20} height={21} alt="Card Image" layout="responsive" 
              sizes="(max-width: 100px) 50vw,
              (max-height: 100px) 50vw"/>
      
      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-primary-darkblue">{product.name}</h2>
        <p className="text-base text-primary-darkgreen">{product.description}</p>
        
        {/* Link to Product */}
       
          <p className="text-primary-darkblue mt-2 block underline text-lg">View Product</p>
       
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
