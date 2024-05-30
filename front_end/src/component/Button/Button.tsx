import React from "react";
import classNames from "classnames/bind";

import style from "./Button.module.scss";

const cx = classNames.bind(style);

interface ButtonProps {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  outline?: boolean;
  rounded?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  primary?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = (
  {
    text,
    iconLeft,
    iconRight,
    className,
    primary,
    outline,
    rounded,
    small,
    medium,
    large,
    type,
    onClick,
  }: ButtonProps,
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const classes = cx("wrapper", className, {
    outline: outline,
    rounded: rounded,
    small: small,
    medium: medium,
    large: large,
    primary: primary,
  });

  return (
    <button {...props} onClick={onClick} type={type} className={classes}>
      {iconLeft && <span className={cx("icon")}>{iconLeft}</span>}
      {text && <span className={cx("title")}>{text}</span>}
      {iconRight && <span className={cx("icon")}>{iconRight}</span>}
    </button>
  );
};

export default Button;
