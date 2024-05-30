import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconDefinition } from "../../../component/Icons";

import style from "./Search.module.scss";
// import Button from "../../../component/Button";

const cx = classNames.bind(style);

const Search = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("search")}>
        <input placeholder="Search account and videos" spellCheck="false" />
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={getIconDefinition("magnifying-glass")} />
        </button>
      </div>
    </div>
  );
};

export default Search;
