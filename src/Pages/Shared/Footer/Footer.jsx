import React from "react";
import Container from "../../../components/Containter/Container";
import logo from "../../../../public/ZANG-MART-logo.png";
import { Link } from "react-router-dom";
import paymentMethodImg from "../../../../public/payment-methods.png"

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pb-10 ">
      <Container>
        <div className="">
          <footer className="footer p-4  text-base-content">
            <aside>
              <img className="w-[250px]" src={logo} alt="" />
              <p className="py-1">
                273/A, 60 Feet, Paka Masjid, Middle Pirerbagh, Mirpur,
              </p>
              <p>Dhaka- 1216, Bangladesh</p>
              <p className="py-1">Phone: +8801894885858</p>
              <p className="">Phone: +8801713-048477</p>
              <p className="py-1">Email: support@zangmart.com</p>
              <p>Bkash/Nagad/Rocket/Upay/Tap</p>
              <p className="py-1">Marchant No: 01824-222822</p>
            </aside>
            <nav>
              <header className="text-lg font-semibold text-black pb-2">
                CATEGORIES
              </header>
              <Link className="link link-hover py-1 ">Men</Link>
              <Link className="link link-hover py-1">Women</Link>
              <Link className="link link-hover py-1">Baby’s & Kids</Link>
              <Link className="link link-hover py-1">Home & Lifestyle</Link>
              <Link className="link link-hover py-1">Watch & Clock</Link>
              <Link className="link link-hover py-1">Accessories</Link>
              <Link className="link link-hover py-1">Organic Product</Link>
            </nav>
            <nav>
              <header className="text-lg font-semibold text-black pb-2">
                INFORMATION
              </header>
              <Link className="link link-hover py-1">About us</Link>
              <Link className="link link-hover py-1">About Us</Link>
              <Link className="link link-hover py-1">Terms & Conditions</Link>
              <Link className="link link-hover py-1">
                Refund and Return Policy
              </Link>
              <Link className="link link-hover py-1">
                Affiliates Program Terms
              </Link>
              <Link className="link link-hover py-1">
                Merchant Registration
              </Link>
              <div class="my-3 bg-red-200 border-t w-full border-gray-300 p-0"></div>
              <p className="mb-1">Newsletter</p>
              <div className="form-control">
                <div className="input-group rounded-sm">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="input input-bordered "
                  />
                  <button className="btn bg-[#D11D2A]  hover:bg-[#A11313] text-white">
                    SIGN UP
                  </button>
                </div>
              </div>
            </nav>
            <nav>
              <header className="text-lg font-semibold text-black pb-2">
                USEFUL LINKS
              </header>
              <Link className="link link-hover py-1 ">Company Profile</Link>
              <Link className="link link-hover py-1">Wholesale</Link>
              <Link className="link link-hover py-1">Contact Us</Link>
              <Link className="link link-hover py-1">Blog</Link>
              <Link className="link link-hover py-1">My Account</Link>
              <Link className="link link-hover py-1">My Wallet</Link>
              <Link className="link link-hover py-1">My Cart</Link>
              <div class="my-3 bg-red-200 border-t w-full border-gray-300 p-0"></div>

              <div className="flex  text-center ">
                <Link className="link link-hover py-1">
                  <FaFacebookF className="w-[50px]" />
                </Link>

                <Link className="link link-hover py-1">
                  <FaInstagram className="w-[50px]" />
                </Link>
                <Link className="link link-hover py-1">
                  <FaWhatsapp className="w-[50px]" />
                </Link>
                <Link className="link link-hover py-1">
                  <FaYoutube className="w-[50px]" />
                </Link>
              </div>
            </nav>
          </footer>
        </div>
      </Container>
      <div className="flex flex-col w-full border-opacity-50 ">
        <div className="divider"></div>

        <div>
        <Container>
          <div className="">
            <footer className="footer  p-4">
              <aside className=" grid-flow-col">
                <p>
                  ZangMart Ltd © 2023 | All Rights Reserved | Developed By IMBD
                  Agency
                </p>
              </aside>
              <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <img src={paymentMethodImg} alt="" />
              </nav>
            </footer>
          </div>
        </Container>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
