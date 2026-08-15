"use client";

import SciCommPage from "@components/SciCommPage";

const SECTIONS = [{ key: "piece", heading: "Science Communication Pieces" }];

export default function ScienceCommunicationPieces() {
  return <SciCommPage title="Science Communication Pieces" sections={SECTIONS} />;
}
