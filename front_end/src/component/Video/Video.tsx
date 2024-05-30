import {
  MuteIcon,
  PauseIcon,
  PlayIcon,
  UnmuteIcon,
  EnterFullscreenIcon,
  ExitFullscreenIcon,
  PictureInPictureIcon,
} from "@livepeer/react/assets";
import { getSrc } from "@livepeer/react/external";
import * as Player from "@livepeer/react/player";
import { memo } from "react";
import RingLoader from "react-spinners/RingLoader";

import Settings from "./component/Setting";
import Seek from "./component/Seek";

// import { vodSource } from "./source";

interface VideoProps {
  videosrc: string;
}

const Video = memo(({ videosrc }: VideoProps) => {
  return (
    <Player.Root
      key={videosrc}
      aspectRatio={16 / 9}
      src={getSrc(videosrc)}
      autoPlay
      volume={0}
    >
      <Player.Container id="settings">
        <Player.Video
          title="Agent 327"
          style={{ height: "100%", width: "100%" }}
          muted
          className="rounded-lg"
        />
        <Player.LoadingIndicator
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <RingLoader color="#fe2c55" loading={true} size={100} />
        </Player.LoadingIndicator>
        <Player.Controls
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
            padding: "0.5rem 1rem",
            display: "flex",
            flexDirection: "column-reverse",
            gap: 5,
          }}
          autoHide={1000}
          id="controls"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "between",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                gap: 10,
              }}
            >
              <Player.PlayPauseTrigger
                style={{
                  width: 25,
                  height: 25,
                  color: "white",
                }}
              >
                <Player.PlayingIndicator asChild matcher={false}>
                  <PlayIcon />
                </Player.PlayingIndicator>
                <Player.PlayingIndicator asChild>
                  <PauseIcon />
                </Player.PlayingIndicator>
              </Player.PlayPauseTrigger>

              <Player.LiveIndicator
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <div
                  style={{
                    backgroundColor: "#ef4444",
                    height: 8,
                    width: 8,
                    borderRadius: 9999,
                  }}
                />
                <span style={{ fontSize: 12, userSelect: "none" }}>LIVE</span>
              </Player.LiveIndicator>

              <Player.MuteTrigger
                style={{
                  width: 25,
                  height: 25,
                  color: "white",
                }}
              >
                <Player.VolumeIndicator asChild matcher={false}>
                  <MuteIcon />
                </Player.VolumeIndicator>
                <Player.VolumeIndicator asChild matcher={true}>
                  <UnmuteIcon />
                </Player.VolumeIndicator>
              </Player.MuteTrigger>
              <Player.Volume
                style={{
                  position: "relative",
                  display: "flex",
                  flexGrow: 1,
                  height: 25,
                  alignItems: "center",
                  maxWidth: 120,
                  touchAction: "none",
                  userSelect: "none",
                }}
              >
                <Player.Track
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    position: "relative",
                    flexGrow: 1,
                    borderRadius: 9999,
                    height: "4px",
                  }}
                >
                  <Player.Range
                    style={{
                      position: "absolute",
                      backgroundColor: "white",
                      borderRadius: 9999,
                      height: "100%",
                    }}
                  />
                </Player.Track>
                <Player.Thumb
                  style={{
                    display: "block",
                    width: 12,
                    height: 12,
                    backgroundColor: "white",
                    borderRadius: 9999,
                  }}
                />
              </Player.Volume>
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
              }}
            >
              <Settings />
              <Player.PictureInPictureTrigger
                style={{
                  width: 25,
                  height: 25,
                  color: "white",
                }}
              >
                <PictureInPictureIcon />
              </Player.PictureInPictureTrigger>
              <Player.FullscreenTrigger
                style={{
                  width: 25,
                  height: 25,
                  color: "white",
                }}
              >
                <Player.FullscreenIndicator asChild matcher={false}>
                  <EnterFullscreenIcon />
                </Player.FullscreenIndicator>
                <Player.FullscreenIndicator asChild>
                  <ExitFullscreenIcon />
                </Player.FullscreenIndicator>
              </Player.FullscreenTrigger>
            </div>
          </div>
          <Seek
            style={{
              position: "relative",
              height: 20,
              display: "flex",
              alignItems: "center",
              userSelect: "none",
              touchAction: "none",
            }}
          />
          <Player.Time
            style={{
              // position: "absolute",
              // left: 20,
              // bottom: 20,
              height: 25,
              fontVariant: "tabular-nums",
              color: "white",
            }}
          />
        </Player.Controls>
      </Player.Container>
    </Player.Root>
  );
});

export default Video;
