import React from "react";
import { Link } from "react-router-dom";
import SiteLogo from "../assets/svg/SiteLogo";
import Home from "../assets/svg/Home";
import Box from "../assets/svg/Box";
import Scales from "../assets/svg/Scales";
import Information from "../assets/svg/Information";
import Call from "../assets/svg/Call";
import Book from "../assets/svg/Book";
import People from "../assets/svg/People";
import User from "../assets/svg/User";

const Navbar = () => {
  return (
    <nav className="w-full bg-secondary-bg-color text-white px-[72px] py-[40px]">
      <div className="flex justify-between items-center">
        <ul className="flex items-center space-x-[24px]">
          <li className="flex items-center">
            <Link to={"/"}>
              <SiteLogo />
            </Link>
            <div className="w-[1px] h-[45px] bg-white bg-opacity-20 mx-5"></div>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div className="icons transition-all">
                <Home />
              </div>
              <div>صفحه اصلی</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div className="icons transition-all">
                <Box />
              </div>
              <div>پلن ها</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div className="icons transition-all">
                <Scales />
              </div>
              <div>قوانین</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div className="icons transition-all">
                <Information />
              </div>
              <div>درباره ما</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div className="icons transition-all">
                <Call />
              </div>
              <div>تماس با ما</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div className="icons transition-all">
                <Book />
              </div>
              <div>بلاگ</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div className="icons transition-all">
                <People />
              </div>
              <div>لیدر بورد</div>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <button className="flex items-center border border-white hover:bg-white transition-all hover:text-secondary-bg-color rounded-[10px] px-5 py-[5px] gap-[7px]">
            <User /> <span>ورود / ثبت نام</span>
          </button>
          <button className="border border-white rounded-[10px] px-5 py-[5px]">
            FA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
