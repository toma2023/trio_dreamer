import React from "react";

const AdditionalInformation = () => {
  return (
    <div>
      <div className="border-t border-gray-300 my-2"></div>
      <div className="flex items-center justify-center my-5">
        <div className="tabs">
          <a className="tab tab-bordered">DESCRIPTION</a>
          <a className="tab tab-bordered tab-active"> ADDITIONAL INFORMATION</a>
          <a className="tab tab-bordered"> REVIEWS (0)</a>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
