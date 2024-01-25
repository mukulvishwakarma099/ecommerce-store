import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 mt-10">
      <aside>
        <img
          src="https://fakestoreapi.com/icons/logo.png"
          className="w-20"
          alt="logo"
        />
        <p className="font-bold">E-Store</p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <p>
            <Twitter />
          </p>
          <p>
            <Youtube />
          </p>
          <p>
            <Facebook />
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
