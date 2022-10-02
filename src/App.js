import React, { useState } from "react";
import Audiophile from "./UI/Audiophile";
import Databiz from "./UI/Databiz";
import Logo from "./UI/Logo";
import Meet from "./UI/Meet";
import Maker from "./UI/Maker";
import picDesktop from "./images/image-hero-desktop.png";
import picMobile from "./images/image-hero-mobile.png";
import Features from "./component/Features";
import FeaturesMenu from "./component/FeaturesMenu";
import Company from "./component/Company";
import CompanyMenu from "./component/CompanyMenu";
import CloseMenu from "./UI/MobileMenu/CloseMenu";
import Menu from "./UI/MobileMenu/Menu";

function App() {
  const [closeBtn, setCloseBtn] = useState(false);
  return (
    <main className="relative">
      <section className="w-full  flex items-center h-24 px-12">
        <div className="flex w-full relative  justify-between items-center">
          {/* logo & buttons*/}
          <div className="flex items-center justify-center space-x-12">
            <div className=" mt-2">
              <Logo />
            </div>
            <div className="md:block hidden">
              <div className=" flex items-center font-semibold text-mediumGray justify-center space-x-8">
                <Features />
                <Company />

                <a href="#" className="text-mediumGray hover:text-almostBlack">
                  Careers
                </a>
                <a href="#" className="text-mediumGray hover:text-almostBlack">
                  About
                </a>
              </div>
            </div>
          </div>
          {/* login & register */}
          <div className="md:block hidden">
            <div className="flex items-center justify-center space-x-6">
              <a href="#" className=" text-mediumGray font-semibold">
                Login
              </a>
              <button className=" py-1 px-3 border-2 text-mediumGray font-semibold bg-almostWhite rounded-xl transform duration-300 border-mediumGray hover:text-almostBlack hover:border-almostBlack ">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="  flex items-center right-0">
          <Menu onMenuOpen={() => setCloseBtn(true)} />
        </div>
      </section>
      {/* @todo - Mobile Menu */}
      <div className={closeBtn ? "md:hidden block" : "hidden"}>
        <div className="  self-start absolute top-0 bottom-0 left-0 w-1/3 min-h-screen bg-almostBlack opacity-60"></div>
        <div className="menu  self-end absolute top-0  bottom-0 right-0 min-h-screen h-full w-2/3 flex-col py-1  pt-16 pl-8 text-mediumGray text-semibold bg-almostWhite   ">
          <div className="flex flex-col items-start space-y-4">
            <div className="absolute top-9 right-12">
              <CloseMenu onMenu={() => setCloseBtn()} />
            </div>
            <FeaturesMenu />
            <CompanyMenu />
            <a
              href="#"
              className="text-mediumGray text-lg font-semibold hover:text-almostBlack"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-mediumGray text-lg font-semibold hover:text-almostBlack"
            >
              About
            </a>
          </div>
          <div className="flex pt-8 flex-col items-center justify-center space-y-4">
            <a href="#" className=" text-mediumGray font-semibold">
              Login
            </a>
            <button className=" py-1 w-2/3 border-2 text-mediumGray font-semibold bg-almostWhite rounded-xl transform duration-300 border-mediumGray hover:text-almostBlack hover:border-almostBlack ">
              Register
            </button>
          </div>
        </div>
      </div>
      {/* hero */}
      <section id="hero container my-10 pb-12">
        <div
          className=" flex 
         flex-col items-center  justify-center space-y-6 md:flex-row-reverse md:space-y-0 md:space-x-24 md:justify-around "
        >
          {/* img */}
          <div className="flex items-center  h-full  justify-center">
            <img
              src={picDesktop}
              alt=""
              className=" w-1/2  h-full hidden md:block"
            />
            <img src={picMobile} alt="" className="w-full  md:hidden block" />
          </div>

          <div className="w-1/2  flex  flex-col items-center justify-center space-y-10">
            <div className="flex flex-col  space-y-10 ">
              <h1 className="md:self-start md:max-w-sm md:text-left text-center text-almostBlack text-4xl font-bold md:text-5xl lg:text-6xl">
                Make<br></br> remote work
              </h1>
              <p className="self-center md:text-md font-semibold md:self-start max-w-sm text-center text-mediumGray md:text-left">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivitiy soar.
              </p>
              <button className="md:py-2 self-center md:px-6 md:self-start cursor-pointer text-almostWhite bg-almostBlack py-2 px-4 font-semibold rounded-xl border-2 border-almostBlack hover:border-mediumGray hover:bg-almostWhite hover:text-almostBlack">
                Learn more
              </button>

              <div className="flex w-screen md:space-x-12  md:w-full pb-16 md:p-0 md:pt-12 md:items-center justify-around items-center md:self-start">
                <Databiz />
                <Audiophile />
                <Meet />
                <Maker />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
