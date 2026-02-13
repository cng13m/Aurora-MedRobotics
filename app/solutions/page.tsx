import type { Metadata } from "next"
import { SolutionsContent } from "./solutions-content"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover how Aurora MedRobotics supports hospital workflows — from fall prevention and post-op monitoring to ICU support and infection control.",
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
