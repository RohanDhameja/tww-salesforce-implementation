import type { Metadata } from "next";
import PrototypeClient from "./prototype-client";

export const metadata: Metadata = {
  title: "Application UX prototype",
  description:
    "A clickable, mock-data prototype of the proposed Together We Will application and Account experience.",
};

export default function PrototypePage() {
  return <PrototypeClient />;
}
