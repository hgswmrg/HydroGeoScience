"use client";

import SciCommPage from "@components/SciCommPage";

const SECTIONS = [{ key: "presentation", heading: "Invited Presentations" }];

export default function InvitedPresentations() {
  return <SciCommPage title="Invited Presentations" sections={SECTIONS} />;
}
