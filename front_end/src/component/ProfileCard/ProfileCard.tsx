import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import Image from "../Image";
import images from "../../assets/images";
import React from "react";

interface ProfileCardProps {
  user: {
    avatar: string;
    name: string;
    role: string;
    email: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <Card placeholder={false} className="w-96">
      <CardHeader placeholder={false} floated={false} className="rounded-full">
        <Image
          src={user.avatar ? user.avatar : images.noImages}
          alt={user.name}
        />
      </CardHeader>
      <CardBody placeholder={false} className="text-center">
        <Typography
          placeholder={false}
          variant="h4"
          color="blue-gray"
          className="mb-2"
        >
          {user.name}
        </Typography>
        <Typography
          placeholder={false}
          color="blue-gray"
          className="font-medium"
          textGradient
        >
          {user.email}
        </Typography>
      </CardBody>
      <CardFooter
        placeholder={false}
        className="flex justify-center gap-7 pt-2"
      >
        <Tooltip content="Like">
          <Typography
            placeholder={false}
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            placeholder={false}
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            placeholder={false}
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
