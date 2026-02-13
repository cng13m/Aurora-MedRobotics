import type { Metadata } from "next"
import { ProductsContent } from "./products-content"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Aurora MedRobotics products: RoomScan AI, VitalsGuard, Smart Rounds, and AssistBot — purpose-built for hospital environments.",
}

export default function ProductsPage() {
  return <ProductsContent />
}
