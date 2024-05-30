import React, { forwardRef } from "react";
import * as Player from "@livepeer/react/player";
import { CheckIcon } from "lucide-react";

const VideoQualitySelectItem = forwardRef<
  HTMLDivElement,
  Player.VideoQualitySelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <Player.VideoQualitySelectItem
      style={{
        fontSize: 12,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        paddingRight: 35,
        paddingLeft: 25,
        position: "relative",
        userSelect: "none",
        height: 30,
      }}
      {...props}
      ref={forwardedRef}
    >
      <Player.SelectItemText>{children}</Player.SelectItemText>
      <Player.SelectItemIndicator
        style={{
          position: "absolute",
          left: 0,
          width: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckIcon style={{ width: 14, height: 14 }} />
      </Player.SelectItemIndicator>
    </Player.VideoQualitySelectItem>
  );
});

export default VideoQualitySelectItem;
