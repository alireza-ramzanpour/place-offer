import React from "react";
import { FaChevronRight, FaTelegramPlane } from "react-icons/fa";
import { BsMapFill, BsFillTelephoneFill, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-col col1">
              <h2>
                <a href="#">
                  <span>
                    Directone
                    <small>Directory and Listing</small>
                  </span>
                </a>
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <BsTwitter  className="icon"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiLogoFacebook  className="icon"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsInstagram  className="icon"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col2">
              <h2 className="heading">Explore</h2>
              <ul>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Account
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Listing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Pricing Packages
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Pricing Packages
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col2">
              <h2 className="heading">Quick Links</h2>
              <ul>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Feedbacks
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col2">
              <h2 className="heading">Categories</h2>
              <ul>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Food & Drinks
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Hotels
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Shopping
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Beauty
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Fitness
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight className="icon" />
                    Bar & Club
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col1 col3">
              <h2 className="heading">Have a Questions?</h2>
              <div className="contact">
                <ul>
                  <li>
                    <BsMapFill  className="icon"/>
                    <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                  </li>
                  <li>
                    <BsFillTelephoneFill  className="icon"/>
                    <span>+2 392 3929 210</span>
                  </li>
                  <li>
                    <FaTelegramPlane  className="icon"/>
                    <span>info@yourdomain.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  );
}

export default Footer;