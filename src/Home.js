import React from "react";
import "./Home.css";
import Product from "./Product";
import videobg from "./assets/vediobg.mp4";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="logo images"
        />
        {/*
        <div className="home__video">
          <div className="overlay"></div>
          <video src={videobg} autoPlay loop muted />
          <div className="content">
            <p>E-Commerce</p>
            <h1>Discover a world of endless possibilities,</h1>
            <h1>delivered to your doorstep.</h1>
            <h3>Unleash your shopping desires,</h3>

            {/* <div className="row">
              <a href="">Explore My Website</a>
              <a href="">
                Connect With Us <span>&#8594;</span>{" "}
              </a>
              <span>
                You Can Experiences More About My Portfolio And <br /> Personal
                Life Experiences
              </span>
            </div> 
            

          </div>
        </div>

          */}
        {/* <div className="social__links">
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div> */}

        <div className="home__row">
          {/* product */}
          <Product
            id="1235433"
            title="Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop Monitor for Business"
            price={29.99}
            image="https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="1244332"
            title="Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 64GB"
            price={395.01}
            rating={5}
            image="https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_SL1500_.jpg"
          />
          {/* product */}
        </div>

        <div className="home__row">
          <Product
            id="4903450"
            title="InvisibleShield Fusion Curve for Samsung Galaxy S22 Ultra – Flexible Hybrid Screen Protection –"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51kuSrQc4dL._AC_SL1000_.jpg"
          />
          <Product
            id="23343232"
            title="SAMSUNG Galaxy Z Flip 4 Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51K7abmErwL._AC_SL1250_.jpg"
          />
          <Product
            id="12332322"
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB, 8K Camera"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Wkk4n9olL._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90239222"
            title="SamSung LC49RSFDSFESDF 49' Curved LED Gaming Monitoring"
            price={1094.98}
            rating={4}
            image="https://image-us.samsung.com/SamsungUS/home/92621/12062021/C49RG9_006_L-Perspective_Black.jpg?$product-details-jpg$"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
