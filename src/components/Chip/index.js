import React from "react";
import Proptypes from "prop-types";

import Chipstyles from "./chipstyles.module.scss";
export default function Chip(props) {
  const { variant, label, size, color } = props;
  return (
    <div
      className={`${Chipstyles["chip"]} ${Chipstyles[size]} ${
        Chipstyles[`${variant}_${color}`]
      }`}
    >
      {label}
    </div>
  );
}

Chip.propTypes = {
  variant: Proptypes.oneOf(["outlined"]),
  label: Proptypes.string,
  size: Proptypes.oneOf(["sm", "md", "lg"]),
  color: Proptypes.oneOf(["primary", "secondary", "danger", "default"]),
};

Chip.defaultProps = {
  variant: "outlined",
  label: "Easy",
  size: "sm",
  color: "default",
};
