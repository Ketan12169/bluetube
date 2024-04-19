import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: "65px",
      marginTop: 3,

      display: "flex",
      // gap: "15px",
      // marginX: "100px",
      marginLeft: "100px",
      marginRight: "100px",

      borderRadius: "7px",

      // borderBottom: "3px solid white",

      backgroundColor: "#1e1e1e",
      "@media screen and (max-width: 768px)": {
        marginLeft: "50px",
        marginRight: "50px",
      },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#039dfc ",
          color: "white",
          marginLeft: "15px",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "#1ba6fd ",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
