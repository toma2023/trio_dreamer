import React from "react";
import Container from "../../components/Containter/Container";
import AllPageTitle from "../../components/AllPageTitle/AllPageTitle";
import watch from "../../../public/watch_1.webp";

const Sale = () => {
  return (
    <div>
      <AllPageTitle heading="Sale" subHeading="HOME / SALE"></AllPageTitle>
      <Container>
        <div className="my-24 relative max-w-sm rounded overflow-hidden shadow-lg hover:">
          <img className="w-full " src={watch} alt="Card Image" />
          <div className="absolute p-5 text-white top-2 left-2 bg-[#D11D2A] rounded-[50%]">
            -20%
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-sm mb-2">
              Amazfit GTR 2e Smart Watch Global Version
            </div>
            <p className="text-[#D11D2A] font-semibold text-base">
              12000.00tka
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sale;
