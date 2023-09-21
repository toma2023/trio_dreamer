import React, { useContext, useEffect, useState } from "react";
import TrendingCard from "../TrendingCard/TrendingCard";
import { AuthContext } from "../../providers/AuthProvider";

const Trending = () => {
    const { products  } = useContext(AuthContext);

const trendingProducts = products.filter(product => product.isTrending);



  return (
    <div className="grid grid-cols-4 gap-5">
    {
       trendingProducts.map(product=>  <TrendingCard product={product} />)
    }
    </div>
  );
};

export default Trending;
