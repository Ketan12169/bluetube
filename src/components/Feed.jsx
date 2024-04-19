import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import wordsToNumbers from "words-to-numbers";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  ></link>;

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    alanBtn({
      key: "3192587c8d150b568db9738af79d24e02e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, searchtermm, number }) => {
        if (command === "Homepage") {
          navigate("/");
        }

        if (command === "goback") {
          navigate(-1);
        }
        if (command === "New") {
          setSelectedCategory("New");
        }
        if (command === "Music") {
          setSelectedCategory("Music");
        }
        if (command === "Education") {
          setSelectedCategory("Education");
        }
        if (command === "Movie") {
          setSelectedCategory("Movie");
        }
        if (command === "Gaming") {
          setSelectedCategory("Gaming");
        }
        if (command === "Live") {
          setSelectedCategory("Live");
        }
        if (command === "Sport") {
          setSelectedCategory("Sport");
        }
        if (command === "Gym") {
          setSelectedCategory("Gym");
        }
        if (command === "Beauty") {
          setSelectedCategory("Beauty");
        }
        if (command === "Fashion") {
          setSelectedCategory("Fashion");
        }
        if (command === "Comedy") {
          setSelectedCategory("Comedy");
        }
        if (command === "Crypto") {
          setSelectedCategory("Crypto");
        }
        if (command === "Podcast") {
          setSelectedCategory("Podcast");
        }
        if (command === "search") {
          setSearchTerm(searchtermm);

          navigate(`/search/${searchtermm}`);

          setSearchTerm("");
        }
        if (command === "playvideo") {
          const num =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          // setVideos(null);
          if (
            selectedCategory == "New" ||
            selectedCategory == "Music" ||
            selectedCategory == "Gaming" ||
            selectedCategory == "Crypto" ||
            selectedCategory == "Podcast" ||
            selectedCategory == "Comedy" ||
            selectedCategory == "Fashion" ||
            selectedCategory == "Beauty" ||
            selectedCategory == "Gym" ||
            selectedCategory == "Sport" ||
            selectedCategory == "Live" ||
            navigate(`/search/${searchtermm}`)
          ) {
            fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
              (data) => {
                setVideos(data.items);
                navigate(`/video/${data.items[num - 1].id.videoId}`);
              }
            );
          }
        }
      },
    });
  }, []);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ display: "flex", flexDirection: "column" }}>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedCategory}&nbsp;
          <span style={{ color: "#1ba6fd" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
