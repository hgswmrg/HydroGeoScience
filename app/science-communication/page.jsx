"use client";

import SciCommPage from "@components/SciCommPage";

const SECTIONS = [
  { key: "presentation", heading: "Invited Presentations" },
  { key: "piece", heading: "Science Communication Pieces" },
];

export default function ScienceCommunication() {
  return <SciCommPage title="Science Communications" sections={SECTIONS} />;
}
