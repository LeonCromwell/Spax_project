import { Typography } from "@material-tailwind/react";
import classNames from "classnames/bind";

import style from "./Footer.module.scss";
import Image from "../../../component/Image";
import images from "../../../assets/images";

const cx = classNames.bind(style);

function Footer() {
  return (
    <footer className="w-full bg-white p-8 flex justify-center flex-col max-w-[1300px]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between max-w-[1300px]">
        <div className={cx("w-20 h-20")}>
          <Image src={images.logo} alt="Spax logo" className={cx("w-20")} />
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              placeholder={false}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={false}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={false}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={false}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography
        placeholder={false}
        color="blue-gray"
        className="text-center font-normal"
      >
        &copy; 2023 Spax Viet Nam
      </Typography>
    </footer>
  );
}

export default Footer;
