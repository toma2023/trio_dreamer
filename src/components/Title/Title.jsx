import React from "react";
import Container from "../Containter/Container";

const Title = ({ heading }) => {
  return (
    <div>
      <Container>
        <div className="flex flex-col w-full border-opacity-50 my-12">
          
          <div className="divider">
            <h3 className=" text-2xl font-semibold">{heading}</h3>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Title;
