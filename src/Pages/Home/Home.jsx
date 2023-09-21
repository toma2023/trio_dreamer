import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Container from "../../components/Containter/Container";
import Title from "../../components/Title/Title";

import ZMartPost from "../../components/ZMartPost/ZMartPost";
import LatestProductCard from "../../components/LatestProductCard/LatestProductCard";
import TrendingCard from "../../components/TrendingCard/TrendingCard";
import Trending from "../../components/Trending/Trending";
import LatestProducts from "../../components/LatestProducts/LatestProducts";

const Home = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Container>
        <div className="">
          <Helmet>
            <title>Trio Dreamer | Home </title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>

          <div className=" flex justify-between">
            <div className=" w-[23%] ">
              <Categories />
            </div>
            <div className=" w-[75%]">
              <Banner />
            </div>
          </div>
          <Title heading="TRENDING" ></Title>
        <div className="p-4 ">
       <Trending/>
        </div>
        <div className="py-10">
          <ZMartPost/>
        </div>
       
        <div className="">
          <LatestProducts/>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
