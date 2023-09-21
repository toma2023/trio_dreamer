import React from "react";
import AllPageTitle from "../../components/AllPageTitle/AllPageTitle";
import Container from "../../components/Containter/Container";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";


const Affiliate = () => {
 

  return (
    <div>
      <AllPageTitle
        heading="Affiliate"
        subHeading="HOME / AFFILIATE"
      ></AllPageTitle>
      <Container>
        <div className="py-28 flex items-center justify-start gap-9">
         <Login/>
          <Register/>
          
        </div>
       
      </Container>
    </div>
  );
};

export default Affiliate;
