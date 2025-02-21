import type { Metadata } from "next"
import ProductsPage from "./ProductsPage"

export const metadata: Metadata = {
  title: "2nd Cycle - Our Products",
  description:
    "Discover our range of sustainable products designed to help you make a positive impact on the environment.",
}

export default function Page() {
  return <ProductsPage />
}

