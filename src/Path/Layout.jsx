
import "./App.css";
import Navbar from "../Navbar"
import Cta from "../Cta";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import FooterBawah from "../FooterBawah";

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
