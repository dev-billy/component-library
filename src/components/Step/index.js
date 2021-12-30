import React from "react";
import PropTypes from "prop-types";
import doneStepIcon from "../../assets/done-step.svg";
import addStepIcon from "../../assets/add-step.svg";
import currentStepIcon from "../../assets/current-step.svg";
import nextStepIcon from "../../assets/next-step.svg";

import stepStyles from "./stepstyles.module.scss";

const Step = (props) => {
  const { title, variant } = props;

  if (variant === "complete") {
    return (
      <div className={stepStyles.step}>
        <img src={doneStepIcon} />
        {title}
      </div>
    );
  }
  if (variant === "current") {
    return (
      <div className={stepStyles.step}>
        <img src={currentStepIcon} />
        {title}
      </div>
    );
  }
  if (variant === "add") {
    return (
      <div className={stepStyles.step}>
        <img src={addStepIcon} />
        {title}
      </div>
    );
  }
  return (
    <div className={stepStyles.step}>
      <img src={nextStepIcon} />
      {title}
    </div>
  );
};

Step.defaultProps = {
  variant: "next",
  title: "Step 1",
};

Step.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
};

export default Step;
