import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NoItemsInCart = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[70vw] h-[50vh] flex items-center justify-center flex-col gap-5">
        <h1 className="text-2xl md:text-4xl">Your cart is empty</h1>
        <button
          className="btn btn-outline capitalize text-sm md:text-lg"
          onClick={() => navigate("/")}
        >
          <ArrowBigLeft />
          continue shopping
        </button>
      </div>
    </div>
  );
};

export default NoItemsInCart;
