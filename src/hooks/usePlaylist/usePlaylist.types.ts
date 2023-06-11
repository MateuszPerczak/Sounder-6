import type { Playlist } from "@/stores/playlists/playlists.types";

export type UsePlaylist = () => {
  createPlaylist: () => void;
  playlists: Playlist[];
};
