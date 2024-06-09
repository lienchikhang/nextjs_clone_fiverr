"use client";
import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/header.scss";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";
import { Context } from "../../redux";
import HeaderLogo from "./HeaderLogo";
import MenuDrawer from "./MenuDrawer";
import HeaderNav from "./HeaderNav";
import HeaderLoginedInNav from "./HeaderLoginedInNav";
import HeaderSub from "./HeaderSub";

const Header = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);


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


  return (
    <React.Fragment>
      <header className={showNavbar ? "scrolled" : ""}>
        <div>
          <section className="header__menu" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </section>
          <section className="header__logo">
            <HeaderLogo showNavbar={showNavbar} />
          </section>
          <MenuDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
          {showNavbar && <SearchBar />}
          <HeaderNav showNavbar={showNavbar} />
        </div>
        {showNavbar && <HeaderSub />}
      </header>
    </React.Fragment>
  );
};

export default Header;
