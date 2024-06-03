"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import LanguageIcon from "@mui/icons-material/Language";
import NavItemSelect from "./NavItemSelect";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from "@mui/material";
import "../styles/header.scss";
import ItemMenu from "./ItemMenu";
import CustomArrow from "./CustomArrow";
import Slider from "react-slick";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  console.log({ router });

  const subHeaders = [
    "Graphics & Design",
    "Programming & Tech",
    "Digital Marketing",
    "Video & Animation",
    "Writing & Translation",
    "Music & Audio",
    "    Business",
    "Consulting",
    "    Business",
    "Consulting",
  ];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: subHeaders.length,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 50) {
      if (router == "/") setShowNavbar(true);
      else setShowNavbar(false);
    } else {
      if (router == "/") setShowNavbar(false);
      else setShowNavbar(true);
    }
  };

  useEffect(() => {
    if (!router.split("/")[1]) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
      setShowNavbar(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  const list = () => (
    <Box sx={{ width: 300, padding: "24px" }} role="presentation">
      <button className="modal__button text-white bg-black rounded-md px-7 py-2 font-semibold">
        Join fiverr
      </button>
      <List>
        <ItemMenu heading="Sign in" />
        <ItemMenu heading="Browse Categories" />
        <ItemMenu heading="Explore" />
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            General
          </ListSubheader>
        }
      >
        <ItemMenu heading="Home" />
        <ItemMenu heading="English" />
        <ItemMenu heading="Explore" />
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <header className={showNavbar ? "scrolled" : ""}>
        <div>
          <div className="header__menu" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </div>
          <div className="header__logo">
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill={showNavbar ? "#404145" : "#fff"}>
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </div>
          <SwipeableDrawer
            anchor={"left"}
            open={isOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
          <ul className="header__nav">
            <li className="nav__item">
              <NavItemSelect text="Fiverr Pro" link="/test" />
            </li>
            <li className="nav__item">
              <NavItemSelect text="Explore" link="/test" />
            </li>
            <li className="nav__item">
              <LanguageIcon />
              <NavItem text="English" link="/english" />
            </li>
            <li className="nav__item">
              <NavItem text="Become a seller" link="/seller" />
            </li>
            <li className="nav__item">
              <NavItem text="Sign in" link="/auth/login" />
            </li>
            <li className={`nav__item ${showNavbar ? "scrolled" : ""}`}>
              <NavItem text="Join" link="/auth/login" />
            </li>
          </ul>
        </div>
        {showNavbar && (
          <div className="header__sub">
            <Slider {...settings}>
              {subHeaders.map((sub, idx) => {
                return (
                  <div key={idx}>
                    <p>{sub}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
