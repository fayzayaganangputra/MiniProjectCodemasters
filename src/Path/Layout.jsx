
import "../App.css";
import Navbar from "../components/Navbar"
import Cta from "../components/Cta";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import FooterBawah from "../components/FooterBawah";

function Layout() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Cta />
        <Footer />
        <FooterBawah />
    </>
  );
}

export default Layout;
