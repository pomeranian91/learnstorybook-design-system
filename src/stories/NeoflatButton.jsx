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
        props.primary
          ? `btn-action--${action}--primary`
          : `btn-action--${action}--secondary`
      )}
    >
      {label}
    </button>
  );
};

export default NeoflatButton;

NeoflatButton.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  action: PropTypes.string,
};

NeoflatButton.defaultProps = {
  label: "Text",
};
