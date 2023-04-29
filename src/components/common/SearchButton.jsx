import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "brown",
          color: "white",
          marginLeft: "1rem",
          width: "10rem",
          "&:hover": {
            backgroundColor: "#032c2a",
            color: "white",
          },
        }}
        endIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchButton;
