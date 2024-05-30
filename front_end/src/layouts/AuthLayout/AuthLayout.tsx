import classNames from "classnames/bind";

import style from "./AuthLayout.module.scss";

const cx = classNames.bind(style);

const AuthLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>{children}</div>
    </div>
  );
};

export default AuthLayout;
