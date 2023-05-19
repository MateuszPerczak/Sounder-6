import type { Playlist } from "../useStore/useStore.types";

export type UsePlaylist = () => {
  createPlaylist: () => void;
  playlists: Playlist[];
};
