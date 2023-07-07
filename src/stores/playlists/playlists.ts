import { v4 } from "uuid";
import { create, type StoreApi, type UseBoundStore } from "zustand";

import { Icons } from "@/components/icon/Icon.types";

import type { Playlist, PlaylistState } from "./playlists.types";

const usePlaylists: UseBoundStore<StoreApi<PlaylistState>> = create<PlaylistState>(
  (set, get) => ({
    playlists: [
      {
        name: "Favorites",
        icon: Icons.Heart,
        date: "",
        id: "favorites",
        show: false,
        songs: [],
      },
    ],
    addPlaylist: (): Playlist["id"] => {
      const date = new Date();
      const newPlaylist = {
        name: "New Playlist",
        icon: Icons.Playlist,
        date: date.toLocaleDateString("pl-PL", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
        id: v4(),
        show: true,
        songs: [],
      } satisfies Playlist;

      set(({ playlists }) => ({ playlists: [...playlists, newPlaylist] }));

      return newPlaylist["id"];
    },
    removePlaylist: (id: Playlist["id"]): void =>
      set(({ playlists }) => ({
        playlists: playlists.filter((playlist) => playlist.id !== id),
      })),
    renamePlaylist: (id: Playlist["id"], name: Playlist["name"]): void => {
      set(({ playlists }) => ({
        playlists: playlists.map((playlist) =>
          playlist.id === id ? { ...playlist, name } : playlist,
        ),
      }));
    },
    getPlaylist: (id: Playlist["id"]): Playlist => {
      const { playlists } = get();
      return playlists.filter((playlist) => playlist.id === id).at(0) as Playlist;
    },
  }),
);

export default usePlaylists;
