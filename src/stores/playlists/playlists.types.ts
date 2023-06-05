import type { Icons } from "@/components/icon/Icon.types";

export type PlaylistState = {
  playlists: Playlist[];
  addPlaylist: () => Playlist["id"];
  removePlaylist: (id: Playlist["id"]) => void;
  renamePlaylist: (id: Playlist["id"], name: Playlist["name"]) => void;
  getPlaylist: (id: Playlist["id"]) => Playlist;
};

export type Playlist = {
  id: string;
  name: string;
  icon: Icons;
  songs: string[];
  date: string;
  show: boolean;
};
