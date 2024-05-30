import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./VideoCard.module.scss";
import Image from "../Image";
import images from "../../assets/images";

const cx = classNames.bind(style);

interface VideoCardProps {
  className?: string;
  item?: any;
  to?: string;
}

function VideoCard({ className, item, to }: VideoCardProps) {
  return (
    <Link
      to={to || "#"}
      className={cx("w-full flex justify-center align-middle")}
    >
      <Card
        placeholder={false}
        className={cx("w-full max-h-[40rem]  overflow-hidden", className)}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={cx("m-0 rounded-none")}
          placeholder={false}
        >
          <Image
            className="object-cover w-full h-full max-h-[20rem] min-h-[20rem]"
            src={item?.thumbnail || images.noImages}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody placeholder={false}>
          <Typography placeholder={false} variant="h4" color="blue-gray">
            {item?.title}
          </Typography>
        </CardBody>
        <CardFooter
          placeholder={false}
          className={cx("flex items-center justify-between")}
        >
          <div className={cx("flex items-center -space-x-3")}>
            <Tooltip content="Natali Craig">
              <Avatar
                placeholder={false}
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className={cx("border-2 border-white hover:z-10")}
              />
            </Tooltip>
          </div>
          <Typography placeholder={false} className={cx("font-normal")}>
            {item?.create_at}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default VideoCard;
