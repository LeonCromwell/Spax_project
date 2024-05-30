import classNames from "classnames/bind";

import style from "./wrapper.module.scss";

const cx = classNames.bind(style);

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  rest?: any;
}

const Wrapper = ({ children, className, ...rest }: WrapperProps) => {
  return (
    <div className={cx("wrapper", className)} {...rest}>
      {children}
    </div>
  );
};

export default Wrapper;
