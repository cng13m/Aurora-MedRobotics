import type { Metadata } from "next"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Aurora MedRobotics — our mission, team, and commitment to transforming hospital environments with intelligent technology.",
}

export default function AboutPage() {
  return <AboutContent />
}
