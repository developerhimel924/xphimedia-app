import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-1">
            <a href="https://www.xphimedia.com">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/logo.png?alt=media&token=499cc9ae-2918-470a-bf61-2db1b970d77f"
                alt="Logo"
              />
            </a>
          </div>
          <div class="col-sm-12 col-md-5">
            <h6>About Xphimedia</h6>
            <p class="text-justify">
              XPHINITY Media <i>is an online marketplace</i> to showcase
              indigenous voices from across the globe through books, music,
              movies, art and more.
            </p>
          </div>

          <div class="col-xs-6 col-md-2">
            <h6>Books Categories</h6>
            <ul class="footer-links">
              <li>
                <a href="https://www.xphimedia.com/XphimBooks">Books</a>
              </li>
              <li>
                <a href="https://www.xphimedia.com/MusicBooks">Music</a>
              </li>
              <li>
                <a href="https://www.xphimedia.com/XphimMovies">Movies</a>
              </li>
              <li>
                <a href="https://www.xphimedia.com/XphimAnimations">
                  Animations
                </a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-2">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="https://www.xphimedia.com">Home</a>
              </li>
              <li>
                <a href="https://www.xphimedia.com/login">Sign In</a>
              </li>
              <li>
                <a href="https://www.xphimedia.com/orders">Orders</a>
              </li>
              <li>
                <a href="https://www.xphimedia.com/checkout">Shopping Cart</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-2">
            <h6>Contact</h6>
            <ul class="footer-links">
              <li>
                <a href="https://www.xphimedia.com">Contact Us</a>
              </li>
              <li>
                <br />
                <b class="newsletter__text">Subscribe for Newsletter</b>
                <input
                  type="email"
                  className="subscribe__input"
                  placeholder="Enter Your Email..."
                />
                <button type="submit" class="subscribe__btn">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row footer__copyright__sec">
          <div class="col-md-5 col-sm-4 col-xs-12">
            <p class="copyright-text">
              Copyright &copy;2021 All Rights Reserved by
              <a href="https://www.xphimedia.com"> Xphimedia</a>.
            </p>
          </div>

          <div class="col-md-3 col-sm-3 col-xs-12">
            <Link to="/">
              <b class="terms__text">Terms of Use </b>
            </Link>
            <span class="separator__icon">| |</span>
            <Link to="/">
              <b class="terms__text"> Privacy & Policy</b>
            </Link>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <ul class="social-icons">
              <li>
                <a
                  class="facebook"
                  target="__blank"
                  href="https://www.facebook.com/xphimedia/"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  class="twitter"
                  target="__blank"
                  href="https://twitter.com/xphimedia"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  class="dribbble"
                  target="__blank"
                  href="https://www.instagram.com/xphimedia/"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
