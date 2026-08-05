"use client";

import 'tailwindcss/tailwind.css';
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getGallery } from "@backend/sanity-utils";
import Lightbox from "@components/Lightbox";

const REVEAL_DISTANCE_PX = 20;
const REVEAL_DURATION_S = 0.4;
const STAGGER_DELAY_S = 0.05;
const MAX_STAGGER_STEPS = 6;

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activePhotos, setActivePhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    async function fetchData() {
      const data = await getGallery();
      setGalleryData(data);
      setLoaded(true);
    }
    fetchData();
  }, []);

  const openLightbox = (photos, index) => {
    setActivePhotos(photos);
    setActiveIndex(index);
  };

  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + activePhotos.length) % activePhotos.length
    );

  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % activePhotos.length
    );

  const years = galleryData.filter((entry) => entry.photos && entry.photos.length > 0);

  return (
    <section className="w-full flex flex-col mb-20">
      {/* Image Header */}
      <div className="relative w-full h-52 md:h-[400px]">
        <Image
          src="/assets/TeamImage.png"
          alt="Gallery Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-bold text-2xl md:text-5xl xl:text-6xl 2xl:text-8xl text-white text-center px-4">
            Gallery
          </p>
        </div>
      </div>

      {/* Years */}
      {years.map((entry) => (
        <div key={entry._id} className="px-4 md:px-20">
          <div className="flex flex-wrap items-baseline gap-x-4 mt-10">
            <p className="text-xl md:text-3xl 2xl:text-5xl font-semibold text-primary-darkgreen">
              {entry.year}
            </p>
            {entry.title && (
              <p className="text-sm md:text-lg 2xl:text-2xl text-gray-600">
                {entry.title}
              </p>
            )}
          </div>
          <hr className="mt-2 h-0.5 bg-primary-darkblue" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-8">
            {entry.photos.map((photo, index) => (
              <motion.button
                key={`${entry._id}-${index}`}
                type="button"
                onClick={() => openLightbox(entry.photos, index)}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : REVEAL_DISTANCE_PX }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: REVEAL_DURATION_S,
                  ease: "easeOut",
                  delay: Math.min(index, MAX_STAGGER_STEPS) * STAGGER_DELAY_S,
                }}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-darkgreen transition-shadow duration-500"
                aria-label={photo.caption || `View photo ${index + 1} from ${entry.year}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.url}
                  alt={photo.caption || photo.alt || `Team photo from ${entry.year}`}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {photo.caption && (
                  <span className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 text-white text-xs md:text-sm 2xl:text-lg px-2 py-1 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {photo.caption}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      ))}

      {loaded && years.length === 0 && (
        <div className="px-4 md:px-20">
          <p className="mt-10 text-sm md:text-base 2xl:text-2xl text-gray-500">
            Photos are on their way — check back soon.
          </p>
        </div>
      )}

      <Lightbox
        photos={activePhotos}
        index={activeIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}
