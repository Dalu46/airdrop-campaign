import React from "react";
import HomeBody from "./home body/HomeBody";
import HomeVideo from "./home video/HomeVideo";
import './home.css'
import HomeHeader from "./HomeHeader";
import NavBar from "../../components/navbar/NavBar";
import Accordion from "./home accordion/Accordion";
import Footer from "./footer/Footer";
import Menu from "../../components/menu/Menu";


const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Menu isMobile={true} />
            <HomeHeader />
            <HomeBody />
            <HomeVideo />
            <Accordion />
            <Footer />
        </div>
    )
}

export default Home;