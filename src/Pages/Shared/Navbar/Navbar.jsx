import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/ZANG-MART-logo.png";
import Container from "../../../components/Containter/Container";
import { HiMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/shop" className="  text-semibold  ">
          SHOP
        </Link>
      </li>
      <li>
        <Link to="/sale" className= "  text-semibold  ">
          SALE
        </Link>
      </li>
      <li>
        <Link to="/upcoming" className="  text-semibold  ">
          UPCOMING
        </Link>
      </li>
      <li>
        <Link to="/preOrder" className="  text-semibold  ">
          PREORDER
        </Link>
      </li>
      <li>
        <Link to="/videoGalery" className=" text-semibold  ">
          VIDEO GALLERY
        </Link>
      </li>
      <li>
        <Link to="/affiliate" className=" text-semibold ">
          AFFILIATE
        </Link>
      </li>
    </>
  );
  const navItems2 = (
    <>
      <li>
        <Link to="/" className=" text-semibold  ">
        REGISTER
        </Link>     
      </li>
      <li>
        <Link to="/" className="text-semibold text-lg w-5 h-5 ">
        <HiMagnifyingGlass/>
        </Link>     
      </li>
      <li>
        <Link to="/" className="text-semibold text-lg  w-5 h-5 ">
        <HiOutlineHeart/>
        </Link>     
      </li>
      <li>
        <Link to="/" className="text-semibold text-lg  w-5 h-5 ">
        <IoCartOutline/>
        </Link>     
      </li>
      {/* <li>
        <Link to="/" className="text-semibold text-lg  w-5 h-5 ">
        <div className="flex items-center justify-center">
            <p>00.00</p>
        <IoCartOutline/>
        </div>
        </Link>     
      </li> */}
    </>
  );

  return (
    <div className="">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {navItems}
                {navItems2}
              </ul>
            </div>
           <Link to="/"> <img className="w-[180px]" src={logo} alt="" /></Link>
          </div>
          <div className="navbar-center  hidden lg:flex  ">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          
          </div>
          <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 ">{navItems2}</ul>
           
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
