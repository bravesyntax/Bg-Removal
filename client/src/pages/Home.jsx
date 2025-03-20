import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import ResultAccuracy from "../components/ResultAccuracy";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <ResultAccuracy />
      <Testimonial />
    </div>
  );
};

export default Home;
