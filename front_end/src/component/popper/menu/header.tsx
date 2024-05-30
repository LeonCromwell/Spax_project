import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./menu.module.scss";
import { getIconDefinition } from "../../Icons";

const cx = classNames.bind(style);

interface HeaderProps {
  title: string;
  isParent?: boolean;
  onClick?: () => void;
}

const Header = ({ title, onClick, isParent }: HeaderProps) => {
  return (
    <header className={cx("menu-header")}>
      <button>
        {isParent && (
          <FontAwesomeIcon icon={getIconDefinition("chevron-left")} />
        )}
      </button>

      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
};
export default Header;
