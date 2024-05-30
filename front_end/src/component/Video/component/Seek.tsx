import { forwardRef } from "react";
import * as Player from "@livepeer/react/player";

const Seek = forwardRef<HTMLButtonElement, Player.SeekProps>(
  ({ children, ...props }, forwardedRef) => (
    <Player.Seek ref={forwardedRef} {...props}>
      <Player.Track
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          position: "relative",
          flexGrow: 1,
          borderRadius: 9999,
          height: 5,
        }}
      >
        <Player.SeekBuffer
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 9999,
            height: "100%",
          }}
        />
        <Player.Range
          style={{
            position: "absolute",
            backgroundColor: "red",
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
    </Player.Seek>
  )
);

export default Seek;
