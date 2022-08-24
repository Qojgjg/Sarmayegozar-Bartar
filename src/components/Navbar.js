import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);

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
              <div
                className={`icons transition-all ${
                  location.pathname === "/" ? "link-under-line" : ""
                }`}
              >
                <Home />
              </div>
              <div>صفحه اصلی</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/plans"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div
                className={`icons transition-all ${
                  location.pathname === "/plans" ? "link-under-line" : ""
                }`}
              >
                <Box />
              </div>
              <div>پلن ها</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/rules"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div
                className={`icons transition-all ${
                  location.pathname === "/rules" ? "link-under-line" : ""
                }`}
              >
                <Scales />
              </div>
              <div>قوانین</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/aboutus"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div
                className={`icons transition-all ${
                  location.pathname === "/aboutus" ? "link-under-line" : ""
                }`}
              >
                <Information />
              </div>
              <div>درباره ما</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/contactus"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div
                className={`icons transition-all ${
                  location.pathname === "/contactus" ? "link-under-line" : ""
                }`}
              >
                <Call />
              </div>
              <div>تماس با ما</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/blogs"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div
                className={`icons transition-all ${
                  location.pathname === "/blogs" ? "link-under-line" : ""
                }`}
              >
                <Book />
              </div>
              <div>بلاگ</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/leaderbord"}
              className="flex items-center gap-[7px] linkContainer"
            >
              <div
                className={`icons transition-all ${
                  location.pathname === "/leaderbord" ? "link-under-line" : ""
                }`}
              >
                <People />
              </div>
              <div>لیدر بورد</div>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center border border-white hover:bg-white transition-all hover:text-secondary-bg-color rounded-[10px] px-5 py-[5px] gap-[7px]"
          >
            <User /> <span>ورود / ثبت نام</span>
          </button>
          <button className="border border-white font-light rounded-[10px] px-[9px] py-[5px]">
            FA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
