import type { Playlist } from "@/hooks/usePlaylist/usePlaylist.types";

export interface NavPlaylistsProps {
  onClick?: () => void;
  playlists: Playlist[];
}
