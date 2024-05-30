import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional for styling
import "tippy.js/animations/scale.css";
import React, { ReactElement } from "react";
import classNames from "classnames/bind";

import styles from "./menu.module.scss";
import MenuItem from "./menuItem";
import Wrapper from "../wrapper";
import Header from "./header";

const cx = classNames.bind(styles);

interface MenuProps {
  children: ReactElement;
  className?: string;
  items: Array<any>;
  rest?: any;
}

const Menu: React.FC<MenuProps> = ({
  children,
  className,
  items,
  ...rest
}: MenuProps) => {
  const customRender = () => {
    return (
      <div className={cx("wrapper")} tabIndex={-1}>
        <Wrapper>
          <Header title="Menu" isParent={false} />
          <div className={cx("scroll-menu")}>
            {items.map((item, index) => (
              <MenuItem
                link={item.link}
                key={index}
                className={cx("item")}
                icon={item.icon}
                text={item.title}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  };

  return (
    <>
      <Tippy interactive offset={[10, 15]} arrow render={customRender}>
        {children}
      </Tippy>
    </>
  );
};

export default Menu;
