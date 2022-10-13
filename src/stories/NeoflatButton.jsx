import React from "react";
import PropTypes from "prop-types";
import styles from "./neoflatButton.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NeoflatButton = ({ size, label, action, ...props }) => {
  return (
    <button
      type="button"
      className={cx(
        `btn-size--${size}`,
        "btn-common",

        `btn-action--${action}--${props.primary}`
      )}
    >
      {label}
    </button>
  );
};

export default NeoflatButton;
