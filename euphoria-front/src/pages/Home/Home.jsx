import React from "react";
import HomeSlide from "../../components/Home/Slide/HomeSlide";
import SaleProducts from "../../components/Home/SaleProducts/SaleProducts";
import NewArrival from "../../components/Home/NewArrival/NewArrival";
import Footer from "../../layout/footer/Footer";
import FashionSection from "../../components/Home/FashionSection/FashionSection";
import HomeNavbar from "../../layout/navbar/HomeNavbar";
import BigZone from "../../components/Home/BigZone/BigZone";

export const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeSlide />
      <SaleProducts />
      <NewArrival />
      <FashionSection/>
      <BigZone />
      <Footer />
    </>
  );
};
