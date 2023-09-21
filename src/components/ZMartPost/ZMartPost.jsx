import React from "react";
import post_1 from "../../../public/Zangmart_Post_600x338.jpg";
import post_2 from "../../../public/বেশি-লাভ.png";


const ZMartPost = () => {
  return (
    <div>
       
        <div className="p-4">
      <div className="flex items-center justify-center">
        <div>
          <img src={post_1} alt="" />
        </div>
        <div>
          <img src={post_2} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ZMartPost;
