import React, { Fragment } from "react";

import SearchFeed from "../../components/SearchFeed/index";

const SearchResuit = () => {
  return (
    <Fragment>
      <SearchFeed
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "red",
        }}
      />
    </Fragment>
  );
};

export default SearchResuit;
