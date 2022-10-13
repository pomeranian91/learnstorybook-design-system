/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/css";

const EmotionButton = ({ size, label, action, ...props }) => {
  return (
    // , actions[action], sizes[size]
    <button type="button" css={stylea}>
      {label}
    </button>
  );
};

const stylea = css`
  display: inline-block;
  border: 4px;
  border-radius: 0px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  cursor: pointer;
`;

const sizes = {
  small: {
    fontSize: "12px",
    padding: "3px 12px",
  },
  medium: {
    fontSize: "14px",
    padding: "5px 16px",
  },
  large: {
    fontSize: "16px",
    padding: "9px 20px",
  },
};

const actions = {
  primary: css`
    background: #25b9b9;
    color: #fff;
  `,
  error: css`
    background: #ff513e;
    color: #fff;
  `,
};

export default EmotionButton;

EmotionButton.propTypes = {
  able: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EmotionButton.defaultProps = {
  label: "Text",
};
