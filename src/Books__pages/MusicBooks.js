import React from "react";
import "./XphimBooks.css";
import Biographies from "./BooksAssets/biographies.png";
import History from "./BooksAssets/history.png";
import Spiritual from "./BooksAssets/spiritual.png";
import Health from "./BooksAssets/health.png";
import Education from "./BooksAssets/education.png";
import { Link, NavLink } from "react-router-dom";
import Book__banner from "./BooksAssets/book-banner.jpg";
import Jesus from "../Jesus";

const MusicBooks = () => {
  return (
    <div className="books__container">
      <div className="books__header">
        <h1>Music on XPHIM</h1>
      </div>
      <div className="category__wrapper"></div>
      <div className="books__lists__container music__books__lists">
        <div className="books__Links">
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimBooks"
          >
            <h4>Books</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/MusicBooks"
          >
            <h4>Music</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimMovies"
          >
            <h4>Movies</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimAnimations"
          >
            <h4>Animations</h4>
          </NavLink>
        </div>
        <div className="books__lists">
          <h3>CD's & MP3's</h3>
          <div className="books__section">
            <Link exact to="/Coc">
              <Jesus
                title="Color to Cross Tribute"
                price={12.99}
                image="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/6.jpg?alt=media&token=4d5250a0-238b-4cc2-8cbb-142b221347aa"
              />
            </Link>
            <Link exact to="/R2rcd">
              <Jesus
                title="Rage to Righteousness"
                price={"Free"}
                image="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/8.jpg?alt=media&token=f27b24e8-b34f-4920-9ce1-3f26e220360e"
              />
            </Link>
            <Link exact to="/R2r400cd">
              <Jesus
                title="Rage to Righteousness 400 Years to Freedom"
                price={12.99}
                image="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/7.jpg?alt=media&token=1b6d3f1a-dc3d-4a9f-8c54-fdb96c6123a1"
              />
            </Link>
            <Link exact to="/Awakenpsalms">
              <Jesus
                title="Awaken Psalms of Elimelech Hebrew"
                price={12.99}
                image="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/9.jpg?alt=media&token=059fcfa2-1742-4f23-8d75-e61948f7f9d7"
              />
            </Link>
            <Link exact to="/ThewhitelieBook">
              <Jesus
                title="Celestial Beings"
                price={"Free"}
                image="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/10.jpg?alt=media&token=6d108904-4049-4f80-9407-8c492a148ea0"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBooks;
