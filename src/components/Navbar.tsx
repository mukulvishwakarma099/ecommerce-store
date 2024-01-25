import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useProductStore from "../store/store";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { items } = useProductStore();

  const navigate = useNavigate();

  return (
    <nav className="navbar p-5 sticky top-0 z-[1] bg-base-200 shadow-md">
      <div className="navbar-start flex gap-2" onClick={() => navigate("/")}>
        <img
          src="https://fakestoreapi.com/icons/logo.png"
          className="w-12 cursor-pointer"
          alt=""
        />
        <p className="text-lg font-medium">E-Store</p>
      </div>

      <div className="hidden lg:flex gap-6 navbar-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold hover:underline"
              : "font-normal text-gray-500 hover:underline"
          }
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "font-semibold hover:underline"
              : "font-normal text-gray-500 hover:underline"
          }
        >
          <p>Products</p>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-semibold hover:underline"
              : "font-normal text-gray-500 hover:underline"
          }
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-semibold hover:underline"
              : "font-normal text-gray-500 hover:underline"
          }
        >
          <p>Contact</p>
        </NavLink>
      </div>

      <div className="hidden lg:flex navbar-end gap-3">
        <SignedOut>
          <SignInButton>
            <button className="btn btn-outline">
              <User size={20} /> Login
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <Link
          to="/cart"
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <ShoppingCart />

            <span className="badge badge-sm indicator-item">
              {items.length}
            </span>
          </div>
        </Link>
        <div>
          <ToastContainer />
        </div>
      </div>

      <div className="flex items-center lg:hidden gap-4 md:gap-6 navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <Link to="./cart" className="indicator">
            <ShoppingCart />
            <span className="badge badge-sm indicator-item">
              {items.length}
            </span>
          </Link>
        </div>
        <div className="dropdown dropdown-end flex flex-col items-center">
          <button onClick={() => setNav(!nav)}>
            <Menu />
          </button>

          <div
            className={`${
              nav ? "translate-x-0" : "translate-x-[500px]"
            } lg:hidden flex flex-col gap-4 fixed right-0  top-0 transition-all duration-300  w-[50%] p-10 shadow-md h-[100vh] bg-base-200 z-[2]`}
          >
            <button onClick={() => setNav(false)}>
              <X />
            </button>
            <NavLink to="/" className="mt-10">
              <p>Home</p>
            </NavLink>
            <NavLink to="/products">
              <p>Products</p>
            </NavLink>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
            <NavLink to="/contact">
              <p>Contact</p>
            </NavLink>
            <div className="flex items-center gap-10">
              <SignedOut>
                <SignInButton>
                  <button className="btn btn-outline">
                    <User size={20} /> Login
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
