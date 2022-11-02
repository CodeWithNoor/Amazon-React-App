import React from "react";
import "../css/Home.css";
import home from "../images/homeImage.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={home} alt="Beauty" />

        <div className="home__row">
          <Product
            id = '200100200'
            title="Smart Watches"
            price={99.9}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
            rating={4}
          />

          <Product
            id = '200100300'
            title="Get fit at home"
            price={299.9}
            image="https://i.ndtvimg.com/i/2018-01/dumbbell-exercises_650x400_51515073070.jpg?q=50"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id = '200100400'
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
            price={9.9}
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}
          />

          <Product
            id = '200100500'
            title="Shop Home & Office"
            price={29.9}
            image="https://stylebyemilyhenderson.com/wp-content/uploads/2017/01/Emily-Henderson_Home-Office_Dark_Modern_Masculine_3-scaled.jpg"
            rating={3}
          />

          <Product
            id = '200100600'
            title="Y80 TWS Bluetooth 5.1 Wireless Earbuds Bluetooth HIFI Music Earbuds LED Display Headset Earphone with Charging Case"
            price={50}
            image="	https://m.media-amazon.com/images/I/71ir9vyVDTL._AC_UX385_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row"> 
        <Product
        title = 'Queen Comforter Set Bedding Comforter Sets Bed in a Bag Queen Sweet Home, Queen, Dobby Gray'
        price = {149.59}
        rating = {5}
        image = "	https://m.media-amazon.com/images/I/81cRtgcTCZL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
