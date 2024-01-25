import { Eye, Plus, ShoppingCart } from "lucide-react";
import { Product } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import useProductStore from "../store/store";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useProductStore((state) => state.addItem);

  const notify = () =>
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 3000,
      icon: <ShoppingCart size={20} color="green" />,
    });

  return (
    <div key={product.id}>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* IMAGE */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* BUTTONS */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex justify-center items-center flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={() => {
                addItem(product);
                notify();
              }}
            >
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <Plus className="text-3xl" />
              </div>
            </button>

            <Link
              to={`/product/${product.id}`}
              className="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl "
            >
              <Eye />
            </Link>
          </div>
        </div>
      </div>

      {/* CATEGORY & TITLE & PRICE */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <div className="font-semibold mb-1">{product.title}</div>
        </Link>
        <div className="font-semibold ">$ {product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
