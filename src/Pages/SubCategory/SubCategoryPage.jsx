import React from "react";
import { useParams } from "react-router-dom";
import { sidebarCategories } from "./subCategoryData";
import ProductGrid from "../Category/ProductGrid";

export default function SubCategoryPage() {
  const { slug } = useParams();

  const category = subCategories[slug];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        SubCategory Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-white border-b p-10">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="text-gray-500 mt-2">{category.desc}</p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto p-6">
        <ProductGrid products={category.products} />
      </div>

    </div>
  );
}