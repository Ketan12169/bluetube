import { Stack } from "@mui/material";

import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import { SearchBar } from "./";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <Stack
      className="navbar"
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        height: "41px",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        zIndex: 999,
        backgroundColor: "#1e1e1e",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          // src={scrolling ? "/bluetube-s.png" : "/bluetube.png"}
          alt="logo"
          src={"/bluetube.png"}
          height={60}
          className="logo"
        />
        <h1
          className="bluetube"
          // style={{ color: scrolling ? "#ffffff" : "" }}
        >
          Blue
        </h1>
        <h1
          className="bluetube1"
          // style={{ color: scrolling ? "#1E1E1E" : "" }}
        >
          Tube
        </h1>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
