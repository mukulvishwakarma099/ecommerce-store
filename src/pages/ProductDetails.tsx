import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import useProductStore from "../store/store";
import Marquee from "react-fast-marquee";
import SimilarProduct from "../components/SimilarProduct";

const ProductDetails = () => {
  window.scroll(0, 0);
  const { data } = useProducts();

  const addItem = useProductStore((state) => state.addItem);

  const { id } = useParams();
  if (!id) return null;

  const product = data?.find((item) => item.id === parseInt(id));
  if (!product) return null;

  const similarProducts = data?.filter((i) => i.category === product.category);
  if (!similarProducts) return null;

  return (
    <section className="mt-48 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm "
              src={product.image}
              alt=""
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {product.title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              ${product.price}
            </div>
            <p className="mb-8">{product.description}</p>
            <button
              onClick={() => addItem(product)}
              className="w-full btn btn-outline text-base"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h1 className="text-2xl md:text-3xl font-medium">
            You may also like
          </h1>

          <Marquee
            pauseOnHover={true}
            pauseOnClick={true}
            speed={40}
            className="space-x-10"
          >
            <SimilarProduct products={similarProducts} />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
