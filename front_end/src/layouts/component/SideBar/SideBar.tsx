import classNames from "classnames/bind";
import React, { useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import style from "./SideBar.module.scss";
import ProfileCard from "../../../component/ProfileCard";

interface user {
  avatar: string;
  name: string;
  role: string;
  email: string;
}

const cx = classNames.bind(style);

const SideBar = () => {
  const [user, setUser] = React.useState<user>({} as user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);
  return (
    <Card
      placeholder={false}
      className={cx(
        "sidebar md:col-span-1 sm:col-span-1 h-full w-full p-4 shadow-xl shadow-blue-gray-900/5"
      )}
    >
      {/* <div className="mb-2 p-4">
        <Typography placeholder={false} variant="h2" color="blue-gray">
          Sidebar
        </Typography>
      </div> */}
      <List placeholder={false} className="text-3xl ">
        <div className="max-w-full flex justify-center">
          <ProfileCard user={user} />
        </div>

        <hr className="my-2 border-blue-gray-50" />
        <ListItem placeholder={false} className="">
          <ListItemPrefix placeholder={false}>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix placeholder={false}>
            <Chip
              value="14"
              size="md"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem placeholder={false}>
          <ListItemPrefix placeholder={false}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem placeholder={false}>
          <ListItemPrefix placeholder={false}>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem placeholder={false}>
          <ListItemPrefix placeholder={false}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default SideBar;
