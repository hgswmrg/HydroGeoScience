"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const REVEAL_DISTANCE_PX = 24;
const REVEAL_DURATION_S = 0.5;
const STAGGER_DELAY_S = 0.08;
const MAX_STAGGER_STEPS = 3;
const HOVER_SCALE = 1.015;

const ProductCard = ({ product, index = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  const content = (
    <>
      {/* Fixed 16:9 frame keeps every cover photo the same size. The image is
          centered and scaled to fit, so nothing gets cropped off. */}
      <div className="relative w-full aspect-video bg-primary-lightgreen">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name || "Product cover"}
            fill
            className="object-contain p-2 md:p-3"
            sizes="100vw"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h2 className="text-xl md:text-2xl 2xl:text-4xl font-semibold text-primary-darkblue">{product.name}</h2>
        <p className="text-sm md:text-base 2xl:text-2xl text-primary-darkgreen mt-2 flex-grow">{product.description}</p>
        {product.link && (
          <p className="text-primary-darkblue mt-4 block underline text-base md:text-lg 2xl:text-2xl">View Product</p>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : REVEAL_DISTANCE_PX }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { scale: HOVER_SCALE }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: REVEAL_DURATION_S,
        ease: "easeOut",
        delay: Math.min(index, MAX_STAGGER_STEPS) * STAGGER_DELAY_S,
      }}
      className="product-card bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      {product.link ? (
        <Link
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col h-full cursor-pointer"
        >
          {content}
        </Link>
      ) : (
        <div className="flex flex-col h-full">{content}</div>
      )}
    </motion.div>
  );
};

export default ProductCard;
