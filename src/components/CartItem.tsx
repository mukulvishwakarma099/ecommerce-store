import { Product } from "../hooks/useProducts";
import useProductStore from "../store/store";

interface CartItemProps {
  product: Product;
}

const CartItem = ({ product }: CartItemProps) => {
  const { addItem, deleteItem } = useProductStore();

  return (
    <li className="w-full grid content-between grid-cols-2 md:grid-cols-3 gap-3 p-4">
      <div className="w-24">
        <img src={product.image} alt="" />
      </div>
      <p className="text-base font-normal md:text-lg md:font-semibold my-auto">
        {product.title}
      </p>
      <div className="flex flex-col md:justify-around items-center md:items-end">
        <div className="flex gap-4 text-base font-semibold">
          <span className="" role="button" onClick={() => deleteItem(product)}>
            -
          </span>
          <span>{product.qty}</span>
          <span role="button" onClick={() => addItem(product)}>
            +
          </span>
        </div>
        <div className="font-bold text-lg">{`${product.qty} x ${product.price}`}</div>
      </div>
    </li>
  );
};

export default CartItem;
