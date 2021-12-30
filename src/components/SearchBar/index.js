import React from "react";
import PropTypes from "prop-types";

import searchBarStyles from "./searchBarStyles.module.scss";

const SearchBar = (props) => {
  const { placeholder } = props;
  return (
    <div className={searchBarStyles.main}>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "Search something",
};

export default SearchBar;
