import type { Dispatch, SetStateAction } from "react";

import type { Icons } from "@/components/icon/Icon.types";

export type UseStore = () => {
  store: StoreState;
  setStore: Dispatch<SetStateAction<StoreState>>;
};

export type StoreState = {
  playlists: Record<Playlist["id"], Playlist>;
};

export type Playlist = {
  id: string;
  name: string;
  icon: Icons;
  songs: Song[];
};

export type Song = {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: number;
  url: string;
  cover: string;
};
