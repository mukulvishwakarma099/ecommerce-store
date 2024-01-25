import useProductStore from "../store/store";

const CheckoutPage = () => {
  const { items } = useProductStore();

  let subtotal = 0;
  items.map((i) => (subtotal += i.qty * i.price));

  const shipping = 30.0;

  return (
    <>
      <h1 className="text-3xl font-medium text-center mb-2">Checkout</h1>
      <hr className="mb-10" />
      <div className="relative mx-auto w-full bg-base-200">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium sm:text-3xl">
                Secure Checkout
                <span className="mt-2 block h-1 w-10 bg-black sm:w-20"></span>
              </h1>
              <form action="" className="mt-10 flex flex-col space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Expiration date
                  </p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1">
                      <label className="sr-only">Select expiration month</label>
                      <select
                        name="month"
                        id="month"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Month</option>
                      </select>
                    </div>
                    <div className="my-1 ml-3 mr-6">
                      <label className="sr-only">Select expiration year</label>
                      <select
                        name="year"
                        id="year"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    <div className="relative my-1">
                      <label className="sr-only">Security code</label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="sr-only">Card name</label>
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </form>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a
                  href="#"
                  className="whitespace-nowrap text-gray-600 underline hover:text-gray-800"
                >
                  Terms and Conditions
                </a>
              </p>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded btn btn-outline py-2.5 px-4 text-base font-semibold tracking-wide text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24 order-1">
            <h2 className="sr-only">Order summary</h2>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-base-200 to-base-300 opacity-95"></div>
            </div>
            <div className="relative">
              <ul className="space-y-5 h-[200px] overflow-y-auto overflow-x-hidden">
                {items.map((i) => (
                  <li className="flex justify-between" key={i.id}>
                    <div className="inline-flex">
                      <img src={i.image} alt="" className="max-h-16" />
                      <div className="ml-3">
                        <p className="text-base font-semibold">
                          {i.title.substring(0, 20) + "..."}
                        </p>
                        <p className="text-sm font-medium text-opacity-80">
                          Quantity: {i.qty}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">{i.qty * i.price}</p>
                  </li>
                ))}
              </ul>
              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold">
                  <span>Total price:</span>
                  <span>{subtotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-sm font-medium ">
                  <span>Shipping</span>
                  <span>{shipping}</span>
                </p>
              </div>
            </div>
            <div className="relative mt-10 ">
              <h3 className="mb-5 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">
                +01 653 235 211{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                support@estore.com <span className="font-light">(Email)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                Call us now for payment related issues
              </p>
            </div>
            <div className="relative mt-10 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold ">Money Back Guarantee</span>
                <span className="text-xs font-medium ">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
