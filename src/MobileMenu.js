import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Assets/logo.png";
import "./MobileMenu.css";
import { ShoppingCart } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  mobileAppbarStyle: {
    backgroundColor: "#131921",
    position: "sticky",
    top: "0px",
  },
}));

export default function MobileMenu() {
  const classes = useStyles();
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <AppBar className={classes.mobileAppbarStyle}>
        <Toolbar>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img className="logo__img" src={Logo} alt="header logo" />
            </Link>
          </div>
          <div className="mobile__signIn">
            <div onClick={handleAuthenticaton}>
              <Link to={!user && "/login"}>
                <span className="mobile__header__signIn">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </Link>
            </div>
            <Link to="/checkout">
              <div className="header__optionBasket">
                <ShoppingCart />
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="search bar XPHIM"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="mobile__header__bottom__div">
          <NavLink
            exact
            activeClassName="active__navLink"
            className="mobile__header__bottom"
            to="/XphimBooks"
          >
            <span>Books</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="mobile__header__bottom"
            to="/MusicBooks"
          >
            <span>Music</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="mobile__header__bottom"
            to="/XphimMovies"
          >
            <span>Movies</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="mobile__header__bottom"
            to="/XphimAnimations"
          >
            <span>Animations</span>
          </NavLink>
        </div>
      </AppBar>
    </div>
  );
}
