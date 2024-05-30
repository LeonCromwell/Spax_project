import classNames from "classnames/bind";

import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from "./DefaultLayout.module.scss";
import SideBar from "../component/SideBar";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div
        className={cx(
          " parent  md:grid md:grid-cols-6 mt-20  sm:grid-cols-3 w-full"
        )}
      >
        <SideBar />
        <div className={cx("content main md:col-span-5 sm:col-span-2")}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
