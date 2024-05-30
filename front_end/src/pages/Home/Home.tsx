import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import style from "./Home.module.scss";
import VideoCard from "../../component/VideoCard";
import * as videoService from "../../services/videoService";
import Hero from "../../component/Hero";
// import Play from "../../component/Play";

const cx = classNames.bind(style);

type Video = {
  _id: string;
  name: string;
  title: string;
  thumbnail: string;
};

const Home = () => {
  const [videoList, setVideoList] = useState<Video[]>([]);
  useEffect(() => {
    videoService
      .getVideoList()
      .then((data) => {
        setVideoList(data.videos);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <Hero
        className={cx(
          "hero mt-10 border bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl p-14"
        )}
        content="It's a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory."
        category="MOBA"
        title="LEAGUE OF LEGENDS"
        url="#"
        videoSrc="https://www.leagueoflegends.com/static/hero-3e934348790824f4b800524f96a93020.mp4"
        left={false}
      />
      <div
        className={cx(
          "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mt-10 justify-center align-middle"
        )}
      >
        {videoList.length === 0 && (
          <Card placeholder={false} className="mt-6 w-96 animate-pulse">
            <CardHeader
              placeholder={false}
              shadow={false}
              floated={false}
              className="relative grid h-56 place-items-center bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </CardHeader>
            <CardBody placeholder={false}>
              <Typography
                placeholder={false}
                as="div"
                variant="h1"
                className="mb-4 h-3 w-56 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={false}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={false}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={false}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                placeholder={false}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            </CardBody>
            <CardFooter placeholder={false} className="pt-0">
              <Button
                placeholder={false}
                disabled
                tabIndex={-1}
                className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
              >
                &nbsp;
              </Button>
            </CardFooter>
          </Card>
        )}
        {videoList.map((video, index) => {
          return (
            <VideoCard to={`/play?q=${video?._id}`} item={video} key={index} />
          );
        })}
      </div>
      {/* <Play videosrc="https://storage.googleapis.com/hlsstreaming/videos/hls_video/bd003a71-f966-4676-bb91-1709271754469/bd003a71-f966-4676-bb91-1709271754469_1280x720.m3u8?GoogleAccessId=video-service%40driven-airway-411306.iam.gserviceaccount.com&Expires=1767114000&Signature=k3RM3Z%2FYc5U%2B8vZhqCs6nIKw2eU%2FCWN9L5rHmfJ6wEw77GaimorDxbigHL1%2B6UmfcwEoW1hwJLTSIbPhi04DoVOnTrtwHvEErBmDLT%2F8AoWq4VC6tT6ZEZVmjnXN8OF4ZGlR2K%2FaDbADswRrC1N%2BNkTfmAgj%2Fxb7sxJLnpIqaLbkHU096ZuJFpChBfvEzyymt8U3iOuGaPo9Jfwk2zEuvJPno%2B7tvIYD0MQLdhz3IVfvUh5OQEl6ykvw53GbU5akAHFP3glDD20MV03AwORT2tXefVxJ90bMP%2FH3205BtYQY2WWYPWmqIAfwJtt%2Fbt0iKm8NCCn%2F5YAnp1ADwlyyiA%3D%3D" /> */}
    </>
  );
};

export default Home;
