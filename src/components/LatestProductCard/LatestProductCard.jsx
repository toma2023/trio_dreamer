import React from "react";
import kitkat from "../../../public/nestle-kitkat-4-finger-chocolate-covered-wafer-bar-dubai-415-gm.webp";
import shue from "../../../public/juta.jpg";
import belt from "../../../public/belt.jpg";
import oil from "../../../public/oil.jpg";
import Title from "../Title/Title";

const LatestProductCard = ({latestProduct}) => {
 
const {picture, name, price} = latestProduct

  
  return (
    <div className="mb-10">
    
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={picture} alt="Card Image" />
          <div className="px-6 py-4">
            <div className="font-semibold text-sm mb-2">
              {name}
            </div>
            <p className="text-[#D11D2A] font-semibold text-base">
              {price}Taka
            </p>
          </div>
        </div>
     
    </div>
  );
};

export default LatestProductCard;
