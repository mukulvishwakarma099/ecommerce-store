import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import NoItemsInCart from "../components/NoItemsInCart";
import useProductStore from "../store/store";

const CartPage = () => {
  const { items } = useProductStore();

  if (!items.length) return <NoItemsInCart />;

  let subtotal = 0;
  items.map((i) => (subtotal += i.qty * i.price));

  const shipping = 30.0;

  let totalItems = 0;
  items.map((i) => (totalItems += i.qty));

  return (
    <div className="flex gap-6 flex-wrap lg:flex-nowrap justify-center flex-col">
      <h1 className="text-center text-3xl font-medium">Cart</h1>
      <hr className="mb-4" />
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-2/3 h-[500px] ">
          <div className="w-full bg-base-300 p-4 font-semibold">
            <h4>Items List</h4>
          </div>
          <ul className="flex flex-col gap-5 py-4 h-[420px] overflow-y-auto overflow-x-hidden">
            {items.map((item) => (
              <CartItem product={item} key={item.id} />
            ))}
          </ul>
        </div>
        <div className="w-full h-fit lg:w-1/3 bg-base-200">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Order summary</h1>
              <div className="flex flex-col w-full gap-4">
                <div className="flex items-center justify-between mt-5">
                  <p>Products({totalItems})</p>
                  <p className="flex-grow-0">{Math.round(subtotal)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p className="flex-grow-0">{shipping}</p>
                </div>
                <div className="flex items-center justify-between mt-2 text-lg font-semibold capitalize">
                  <p>total amount</p>
                  <p className="flex-grow-0">
                    {Math.round(subtotal + shipping)}
                  </p>
                </div>
                <Link to="/checkout">
                  <button className="w-full btn btn-outline text-base capitalize">
                    checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
