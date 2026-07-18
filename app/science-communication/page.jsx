"use client";

import 'tailwindcss/tailwind.css';
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { getScienceCommunications } from "@backend/sanity-utils";
import SciCommCard from "@components/SciCommCard";

const SECTIONS = [
  { key: "presentation", heading: "Invited Presentations" },
  { key: "piece", heading: "Science Communication Pieces" },
];

export default function ScienceCommunication() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getScienceCommunications();
      setItems(data);
      setLoaded(true);
    }
    fetchData();
  }, []);

  return (
    <section className="w-full flex flex-col mb-20">
      {/* Image Header */}
      <div className="relative w-full h-52 md:h-[400px]">
        <Image
          src="/assets/ubccampus.jpg"
          alt="Science Communication Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-bold text-2xl md:text-5xl xl:text-6xl 2xl:text-8xl text-white text-center px-4">
            Science Communications
          </p>
        </div>
      </div>

      {/* Sections */}
      {SECTIONS.map(({ key, heading }) => {
        const sectionItems = items.filter((item) => item.section === key);
        return (
          <div key={key} className="px-4 md:px-20">
            <p className="mt-10 text-xl md:text-3xl 2xl:text-5xl font-semibold text-primary-darkgreen">
              {heading}
            </p>
            <hr className="mt-2 h-0.5 bg-primary-darkblue" />
            <div className="flex flex-col gap-4 md:gap-6 mt-5 md:mt-8">
              {sectionItems.map((item, index) => (
                <SciCommCard key={item._id} item={item} index={index} />
              ))}
              {loaded && sectionItems.length === 0 && (
                <p className="text-sm md:text-base 2xl:text-2xl text-gray-500">
                  New items are on their way — check back soon.
                </p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
