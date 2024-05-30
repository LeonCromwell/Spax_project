import React, { CSSProperties } from "react";
import * as Player from "@livepeer/react/player";
import * as Popover from "@radix-ui/react-popover";
import { SettingsIcon } from "@livepeer/react/assets";
import { ChevronDownIcon, XIcon } from "lucide-react";

import RateSelectItem from "./RateSelectItem";
import VideoQualitySelectItem from "./VideoQualitySelectItem";
import { useVideoStore } from "../../../zustand/store";

const Settings = React.forwardRef(
  (
    { style }: { style?: CSSProperties },
    ref: React.Ref<HTMLButtonElement> | undefined
  ) => {
    const { setResolution } = useVideoStore();

    const handleCallback = (quality: string) => {
      setResolution(quality);
    };

    return (
      <Popover.Root>
        <Popover.Trigger ref={ref} asChild>
          <button
            type="button"
            style={style}
            aria-label="Playback settings"
            onClick={(e) => e.stopPropagation()}
          >
            <SettingsIcon
              style={{
                width: 25,
                height: 25,
                color: "white",
              }}
            />
          </button>
        </Popover.Trigger>
        <Popover.Portal
          //   forceMount
          container={document.getElementById("settings")}
        >
          <Popover.Content
            style={{
              width: 250,
              borderRadius: 5,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(12px)",
              padding: 10,
              color: "white",
            }}
            side="top"
            // alignOffset={-70}
            align="end"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <p
                style={{
                  fontSize: 14,
                }}
              >
                Settings
              </p>
              <Player.LiveIndicator
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
                matcher={false}
              >
                <label
                  style={{
                    fontSize: 12,
                  }}
                  htmlFor="qualitySelect"
                >
                  Speed
                </label>
                <Player.RateSelect name="rateSelect">
                  <Player.SelectTrigger
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: 30,
                      minWidth: 120,
                      fontSize: 12,
                      gap: 5,
                      padding: 10,
                      borderRadius: 5,
                      outline: "white solid 1px",
                    }}
                    aria-label="Playback speed"
                  >
                    <Player.SelectValue placeholder="Select a speed..." />
                    <Player.SelectIcon>
                      <ChevronDownIcon style={{ width: 14, height: 14 }} />
                    </Player.SelectIcon>
                  </Player.SelectTrigger>
                  <Player.SelectPortal
                    container={document.getElementById("settings")}
                  >
                    <Player.SelectContent
                      style={{
                        borderRadius: 5,
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      <Player.SelectViewport style={{ padding: 5 }}>
                        <Player.SelectGroup>
                          <RateSelectItem value={0.5}>0.5x</RateSelectItem>
                          <RateSelectItem value={1}>1x</RateSelectItem>
                        </Player.SelectGroup>
                      </Player.SelectViewport>
                    </Player.SelectContent>
                  </Player.SelectPortal>
                </Player.RateSelect>
              </Player.LiveIndicator>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <label
                  style={{
                    fontSize: 12,
                  }}
                  htmlFor="qualitySelect"
                >
                  Quality
                </label>
                <Player.VideoQualitySelect
                  onValueChange={(quality) => {
                    handleCallback(quality);
                  }}
                  name="qualitySelect"
                >
                  <Player.SelectTrigger
                    style={{
                      minWidth: 120,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: 30,
                      fontSize: 12,
                      gap: 5,
                      padding: 10,
                      borderRadius: 5,
                      outline: "white solid 1px",
                    }}
                    aria-label="Playback quality"
                  >
                    <Player.SelectValue placeholder="Select a quality..." />
                    <Player.SelectIcon>
                      <ChevronDownIcon style={{ width: 14, height: 14 }} />
                    </Player.SelectIcon>
                  </Player.SelectTrigger>
                  <Player.SelectPortal
                    container={document.getElementById("settings")}
                  >
                    <Player.SelectContent
                      style={{
                        borderRadius: 5,
                        backgroundColor: "black",
                        color: "white",
                        position: "absolute",
                        zIndex: 1,
                        top: 0,
                      }}
                    >
                      <Player.SelectViewport style={{ padding: 5 }}>
                        <Player.SelectGroup>
                          <VideoQualitySelectItem value="1080p">
                            1080p (HD)
                          </VideoQualitySelectItem>
                          <VideoQualitySelectItem value="720p">
                            720p
                          </VideoQualitySelectItem>
                          <VideoQualitySelectItem value="480p">
                            480p
                          </VideoQualitySelectItem>
                          <VideoQualitySelectItem value="360p">
                            360p
                          </VideoQualitySelectItem>
                          <VideoQualitySelectItem value="144p">
                            144p
                          </VideoQualitySelectItem>
                        </Player.SelectGroup>
                      </Player.SelectViewport>
                    </Player.SelectContent>
                  </Player.SelectPortal>
                </Player.VideoQualitySelect>
              </div>
            </div>
            <Popover.Close
              style={{
                borderRadius: 9999,
                height: 20,
                width: 20,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 5,
                right: 5,
              }}
              aria-label="Close"
            >
              <XIcon />
            </Popover.Close>
            <Popover.Arrow
              style={{
                fill: "white",
              }}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);

export default Settings;
