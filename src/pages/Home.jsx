import React from "react";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import TendersSection from "../components/Home/TendersSection";
import ContactUs from "../components/Home/ContactUs";
import Footer from "../components/Home/Footer";
import Copyright from "../components/Copyright";

const Home = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  return (
    <div className="page-container">
      <Header
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <Hero />
      <TendersSection />
      <ContactUs />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
