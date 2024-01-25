import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
