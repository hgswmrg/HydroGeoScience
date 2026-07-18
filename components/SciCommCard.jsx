"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { RiExternalLinkLine } from "react-icons/ri";

const REVEAL_DISTANCE_PX = 24;
const REVEAL_DURATION_S = 0.5;
const STAGGER_DELAY_S = 0.08;
const MAX_STAGGER_STEPS = 3;

const SciCommCard = ({ item, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const card = (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : REVEAL_DISTANCE_PX }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: REVEAL_DURATION_S,
        ease: "easeOut",
        delay: Math.min(index, MAX_STAGGER_STEPS) * STAGGER_DELAY_S,
      }}
      className="bg-primary-lightgreen border-l-4 border-primary-darkgreen rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-500"
    >
      <p className="text-base md:text-xl 2xl:text-3xl font-semibold text-primary-darkgreen">
        {item.title}
      </p>
      {item.citation && (
        <p className="mt-1 text-sm md:text-base 2xl:text-xl italic text-gray-600">
          {item.citation}
        </p>
      )}
      {item.description && (
        <p className="mt-2 text-sm md:text-base 2xl:text-2xl text-gray-700">
          {item.description}
        </p>
      )}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full bg-white border border-primary-darkgreen text-primary-darkgreen text-xs md:text-sm 2xl:text-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {item.link && (
        <div className="flex justify-end mt-3">
          <span className="flex items-center gap-1 text-sm md:text-base 2xl:text-xl text-primary-darkblue hover:underline">
            Read more
            <RiExternalLinkLine size={18} color="#03045e" />
          </span>
        </div>
      )}
    </motion.div>
  );

  if (item.link) {
    return (
      <Link href={item.link} target="_blank" rel="noopener noreferrer">
        {card}
      </Link>
    );
  }

  return card;
};

export default SciCommCard;
