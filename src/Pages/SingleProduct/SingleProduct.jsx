import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import Container from "../../components/Containter/Container";
import LeftSideSingleProduct from "./LeftSideSingleProduct";
import RightSideSingleProducts from "./RightSideSingleProducts";
import AdditionalInformation from "./AdditionalInformation";

const SingleProduct = () => {
  let { id } = useParams();
  const { products } = useContext(AuthContext);
  const product = products.find((product) => product._id === id);
  console.log(product);

  return (
    <div>
      <div>
        <Container>
          <div className=" p-5 ">
            <div className="py-14 flex items-center justify-between">
              <div className="w-[48%]">
                <LeftSideSingleProduct />
              </div>
              <div className="w-[48%]">
                <RightSideSingleProducts />
              </div>
            </div>
            <AdditionalInformation />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleProduct;
