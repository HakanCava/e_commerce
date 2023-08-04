import React from "react";
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

const Home = () => {
  

  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Footer/>
    </div>
  )
};

export default Home;
