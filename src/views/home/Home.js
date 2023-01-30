import React, {useEffect, useState} from "react";
import HomeBody from "./home body/HomeBody";
import HomeVideo from "./home video/HomeVideo";
import "./home.css";
import HomeHeader from "./HomeHeader";
import NavBar from "../../components/navbar/NavBar";
import Accordion from "./home accordion/Accordion";
import Footer from "./footer/Footer";
import Menu from "../../components/menu/Menu";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(show);
  });

  return (
    <div className="home">
      <NavBar show={show} setShow={setShow}/>
      <Menu isVisible={show} isMobile={true} />
      <HomeHeader />
      <HomeBody />
      <HomeVideo />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
