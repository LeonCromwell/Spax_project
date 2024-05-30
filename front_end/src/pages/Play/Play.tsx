import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import { List, ListItem } from "@material-tailwind/react";
import { useRef } from "react";
import { useEffect, useState } from "react";

import Video from "../../component/Video";
import style from "./Play.module.scss";
import VideoCard from "../../component/VideoCard";
import * as VideoService from "../../services/videoService";
import { useVideoStore } from "../../zustand/store";
import images from "../../assets/images";
import InteractiveCommentsSection from "../../component/InteractiveCommentsSection";

interface VideoDetail {
  _id: string;
  author: string;
  name: string;
  title: string;
  thumbnail: string;
  original_video: string;
  resolution: string[];
  create_at: string;
}

type Videotest = {
  _id: string;
  name: string;
  title: string;
  thumbnail: string;
};

const cx = classNames.bind(style);

const Play = () => {
  const [videoDetail, setVideoDetail] = useState<VideoDetail | undefined>();
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoId = params.get("q") || "";

  const videotest: Videotest = {
    _id: "1",
    name: "name",
    title: "title",
    thumbnail: images.avatar,
  } as Videotest;

  const { setResolution: setResolutionStore, resolution: videoResolution } =
    useVideoStore();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn trang lên đầu khi component được mount
    let jsonString = localStorage.getItem("livepeer.livepeer-media-controller");

    if (jsonString) {
      try {
        let jsonObject = JSON.parse(jsonString);

        if (typeof jsonObject === "string") {
          jsonObject = JSON.parse(jsonObject);
        }
        setResolutionStore(jsonObject.state.videoQuality);
      } catch (e) {
        console.error("Có lỗi xảy ra khi parse JSON:", e);
      }
    } else {
      console.log("Không tìm thấy dữ liệu trong localStorage cho key đó.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchVideoDetail = async () => {
      const response = await VideoService.getVideoDetail(videoId);
      setVideoDetail(response.video);
    };
    fetchVideoDetail();
  }, [videoId]);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        if (videoDetail?.resolution && videoDetail?.resolution.length > 0) {
          const url = await VideoService.getUrlVideo(
            videoDetail?._id,
            videoResolution
          );
          console.log("url", url.url[0]);
          setVideoUrl(url.url[0]);
        } else {
          setVideoUrl(videoDetail?.original_video || "");
        }
      } catch (error) {
        console.error("Error fetching video URL:", error);
        setVideoUrl(videoDetail?.original_video || "");
      }
    };

    fetchUrl();
  }, [videoDetail, videoResolution]);
  if (videoUrl !== "" && videoRef.current) {
    videoRef.current.src = videoUrl;
  }

  return (
    <>
      <div className={cx("flex flex-col")}>
        <div className={cx("mt-6 grid  gap-1 grid-rows-1 grid-cols-6 w-full")}>
          <div className={cx("max-w-screen-2xl col-span-5")}>
            {videoUrl !== "" ? (
              <Video key={videoUrl} videosrc={videoUrl} />
            ) : (
              <Video key={videoUrl} videosrc="" />
            )}
          </div>

          <List
            placeholder={false}
            className={cx("flex flex-col gap-1 col-span-1 h-full")}
          >
            <ListItem placeholder={false}>
              <VideoCard item={videotest} />
            </ListItem>
          </List>
        </div>
        <div>
          <InteractiveCommentsSection />
        </div>
      </div>
    </>
  );
};

export default Play;
