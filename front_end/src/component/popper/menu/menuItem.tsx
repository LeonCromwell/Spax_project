import classNames from "classnames/bind";

import styles from "./menu.module.scss";
import Button from "../../Button";
import React from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface MenuItemProps {
  text?: string;
  icon?: React.ReactNode;
  link: string;
  className?: string;
  rest?: any;
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <Link to={props.link}>
      <Button
        iconLeft={props.icon}
        className={props.className}
        text={props.text}
        {...props.rest}
      ></Button>
    </Link>
  );
};

export default MenuItem;
