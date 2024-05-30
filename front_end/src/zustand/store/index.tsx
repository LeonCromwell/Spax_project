import { create } from "zustand";

interface videoStore {
  videoDetail: {
    _id: string;
    original_video: string;
  };
  resolution: string;
  videoUrl: string;
  volume: number;
  setVideoDetail: (videoDetail: {
    _id: string;
    original_video: string;
  }) => void;
  setResolution: (resolution: string) => void;
  setVideoUrl: (videoUrl: string) => void;
  setVolume: (volume: number) => void;
}

export const useVideoStore = create<videoStore>((set) => ({
  videoDetail: {
    _id: "",
    original_video: "",
  },
  resolution: "144p",
  videoUrl: "",
  volume: 0,
  setVideoDetail: (videoDetail) => set({ videoDetail }),
  setResolution: (resolution) => set({ resolution }),
  setVideoUrl: (videoUrl) => set({ videoUrl }),
  setVolume: (volume) => set({ volume }),
}));
