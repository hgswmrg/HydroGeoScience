"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const FADE_DURATION_S = 0.2;
const PANEL_SCALE_HIDDEN = 0.96;

const Lightbox = ({ photos, index, onClose, onPrev, onNext }) => {
  const shouldReduceMotion = useReducedMotion();
  const isOpen = index !== null;
  const photo = isOpen ? photos[index] : null;

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION_S }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-white p-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <IoClose size={32} />
          </button>

          {photos.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                onPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 md:left-6 text-white p-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <IoChevronBack size={36} />
            </button>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : PANEL_SCALE_HIDDEN }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: FADE_DURATION_S }}
            onClick={(event) => event.stopPropagation()}
            className="flex flex-col items-center max-w-5xl w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.url}
              alt={photo.caption || photo.alt || "Team photo"}
              className="max-h-[75vh] max-w-full object-contain rounded"
            />
            {photo.caption && (
              <p className="mt-3 text-sm md:text-base 2xl:text-xl text-white text-center px-4">
                {photo.caption}
              </p>
            )}
            {photos.length > 1 && (
              <p className="mt-2 text-xs md:text-sm text-gray-400">
                {index + 1} of {photos.length}
              </p>
            )}
          </motion.div>

          {photos.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                onNext();
              }}
              aria-label="Next photo"
              className="absolute right-2 md:right-6 text-white p-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <IoChevronForward size={36} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
