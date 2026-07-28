"use client";

import CategoryPage from "./[category]/page";

export default function CollectionsMainPage() {
  return <CategoryPage params={Promise.resolve({ category: "chandeliers" })} />;
}
