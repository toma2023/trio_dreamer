import React from "react";
import { Link } from "react-router-dom";


const TrendingCard = ({product }) => {
  const {_id, picture , name, price } = product;

  //console.log(product);

  return (
    <Link to={`/singleProduct/${_id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={picture} alt="Card Image" />
        <div className="px-6 py-4">
          <div className="font-semibold text-sm mb-2">
            {name}
          </div>
          <p className="text-[#D11D2A] font-semibold text-base">{price} Taka</p>
        </div>
      </div>
      

     
    </Link>
  );
};

export default TrendingCard;
