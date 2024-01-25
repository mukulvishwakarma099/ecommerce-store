import { useState } from "react";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import ErrorPage from "../pages/ErrorPage";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data, isLoading, error } = useProducts(selectedCategory!);

  const { data: categories, isLoading: isCategoryLoading } = useCategories();

  if (error) return <ErrorPage />;

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const cardSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const categoriesSkeleton = [1, 2, 3, 4, 5];

  return (
    <div className="py-5">
      <h1 className="text-center text-4xl font-thin py-5">Latest Products</h1>
      <hr />

      <div className="flex items-center justify-center flex-wrap gap-4 py-5">
        {categories && (
          <button
            className="btn btn-outline"
            onClick={() => handleSelectCategory("")}
          >
            All
          </button>
        )}
        {isCategoryLoading
          ? categoriesSkeleton.map((s) => (
              <div className="skeleton w-28 h-16" key={s}></div>
            ))
          : categories?.map((category, index) => (
              <button
                className="btn btn-outline"
                key={index}
                onClick={() => handleSelectCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0">
        {isLoading
          ? cardSkeleton.map((skeleton) => {
              return <LoadingSkeleton skeleton={skeleton} />;
            })
          : data?.map((product) => {
              return <ProductCard product={product} />;
            })}
      </div>
    </div>
  );
};

export default ProductsSection;
