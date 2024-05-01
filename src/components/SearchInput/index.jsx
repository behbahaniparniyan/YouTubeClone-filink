import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, IconButton, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./style.js";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Box component="form" onSubmit={onHandleSubmit}>
      <Toolbar>
        <Box class={classes.container}>
          <input
            class={classes.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton class={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
};
export default SearchInput;
