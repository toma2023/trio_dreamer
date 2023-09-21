import React from "react";
import AllPageTitle from "../../components/AllPageTitle/AllPageTitle";
import Container from "../../components/Containter/Container";
import { FaBraille, FaBuromobelexperte } from "react-icons/fa6";
import { GiAbstract050 } from "react-icons/gi";
import watch from "../../../public/watch_1.webp"

const Shop = () => {
  return (
    <div className="">
      <AllPageTitle heading="Shop" subHeading="HOME / SHOP"></AllPageTitle>
      <Container>
        <div className=" flex justify-between px-4 py-10">
          <p>
            <span className="text-[#585858]">Home</span> / Shop
          </p>
          <div className="flex justify-between items-center  gap-5">
            <p>
              Show: <span className="text-[#585858]">9/ 24/ 36</span>
            </p>
            <div className="flex justify-between items-center gap-2">
              <FaBuromobelexperte />
              <FaBraille />
              <GiAbstract050 />
              <select className="ml-3 select border-none select-sm w-full max-w-xs">
                <option disabled selected>
                  Sort By Latest
                </option>
                <option>Small Apple</option>
                <option>Small Orange</option>
                <option>Small Tomato</option>
              </select>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:">
        <img className="w-full"  src={watch} alt="Card Image" />
        <div className="px-6 py-4">
          <div className="font-semibold text-sm mb-2">Amazfit GTR 2e Smart Watch Global Version</div>
          <p className="text-[#D11D2A] font-semibold text-base">
            12000.00tka
          </p>
        </div>
       
      </div>


       <div className="flex items-center justify-center">
       <div className="join ">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
       </div>
      </Container>
    </div>
  );
};

export default Shop;
