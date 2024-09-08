import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <section className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
