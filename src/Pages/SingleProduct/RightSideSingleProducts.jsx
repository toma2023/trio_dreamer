import React, { useState } from "react";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineShieldCheck,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty, IoIosShuffle, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaFacebookF, FaTelegram } from "react-icons/fa6";
const RightSideSingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <p>
          <span className="text-[#97898F]">
            Home/ Smart Watch / Haylou Haylou /
          </span>
          RS3 AMOLED Smart Watch with spO2
        </p>
        <div className="flex items-center justify-center my-5 ">
          <HiOutlineChevronLeft className="w-5 h-5 text-[#97898F]" />
          <HiOutlineViewGrid className="w-5 h-5 text-[#97898F]" />
          <HiOutlineChevronRight className="w-5 h-5 text-[#97898F]" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-4xl  ">Toma AKter Hashi</h2>
        <button className="px-4 py-6 rounded-md shadow-md">Motion View</button>
      </div>
      <div className="">
        <p className="text-2xl font-medium text-[#D11D2A] mb-4">
          29939.00 Taka
        </p>
        <div className="px-5">
          <ul className=" list-disc">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>

        <HiOutlineShieldCheck className="ml-1 my-4" />
        <div>6 Months Brand Warranty</div>
        {/* Quantity  */}
        <div className="mt-8">
          <div className="text-xl flex items-start gap-10">
            <div className="flex items-center justify-start gap-2">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className={`w-[30px] h-[30px] bg-[#EFF0F5] font-bold flex items-center justify-center rounded-md ${
                  quantity <= 1 ? "bg-gray-300" : "cursor-pointer"
                }`}
                disabled={quantity <= 1}
              >
                -
              </button>
              <h1 className="w-[30px] h-[30px] border flex items-center justify-center rounded-md text-lg">
                {quantity}
              </h1>
              <div
                onClick={() => setQuantity(quantity + 1)}
                className=" w-[30px] h-[30px] bg-[#EFF0F5] cursor-pointer font-bold flex items-center justify-center rounded-md"
              >
                +
              </div>
            </div>
            <Link to={`/proceed_to_checkout/${""}`} className="flex-1">
              <button className="w-[50%] bg-[#B31212] py-3  text-white text-xl font-semibold ">
                Bye Now
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-5 mt-8">
            <button
              onClick={() => addToCart("")}
              className="bg-[#B31212] py-3 flex-1 text-white text-xl font-semibold"
            >
              Add to Cart
            </button>
          </div>

          <div className="pt-8 pb-4 flex items-center justify-start gap-8  ">
            <div className=" flex items-center justify-start gap-2">
              <IoIosShuffle className="w-6 h-6" />
              <p className="text-base">Compare</p>
            </div>
            <div className=" flex items-center justify-start gap-2">
              <IoIosHeartEmpty className="w-6 h-6" />
              <p className="text-base">Add To Wishlist</p>
            </div>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
        </div>
        <div>
          <p className="py-4">
            SKU:<span className="text-[#97898F]"> MOT-H-RS3</span>
          </p>
          <p className="pb-4">
            Categories:
            <span className="text-[#97898F]">
              {" "}
              10% Discount, Haylou, Mobile, Smart Watch
            </span>
          </p>
          <div className="flex items-center justify-start gap-4 pb-4">
            <p >Categories:</p>
            <div className="flex items-center justify-center gap-2">
                <IoLogoTwitter className="text-[#97898F] w-4 h-4"/>
                <IoLogoLinkedin className="text-[#97898F] w-4 h-4" />
                <FaFacebookF className="text-[#97898F] w-4 h-4" />
                <FaTelegram className="text-[#97898F] w-4 h-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideSingleProducts;
