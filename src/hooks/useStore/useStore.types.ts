import type { Dispatch, SetStateAction } from "react";

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
  icon: string;
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
