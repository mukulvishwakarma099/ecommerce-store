import { Eye, Plus } from "lucide-react";
import { Product } from "../hooks/useProducts";
import useProductStore from "../store/store";
import { Link } from "react-router-dom";

interface SimilarProductProps {
  products: Product[];
}

const SimilarProduct = ({ products }: SimilarProductProps) => {
  const { addItem } = useProductStore();

  return (
    <div className="py-4 my-4">
      <div className="flex space-x-10">
        {products.map((product) => (
          <div
            className="py-4 border border-[#e4e4e4] h-[250px] mb-4 relative overflow-hidden group transition"
            key={product.id}
          >
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={product.image}
                alt={product.title}
              />
            </div>

            <h4 className="text-center font-medium text-xl py-3 mt-2">
              {product.title.substring(0, 15)}...
            </h4>

            <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex justify-center items-center flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button onClick={() => addItem(product)}>
                <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                  <Plus className="text-3xl" />
                </div>
              </button>

              <Link
                to={`/product/${product.id}`}
                className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl "
              >
                <Eye />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
