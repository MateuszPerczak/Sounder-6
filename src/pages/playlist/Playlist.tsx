import Page from "@/components/page/Page";

import type { PlaylistProps } from "./Playlist.types";

const Playlist = ({ playlistId }: PlaylistProps): JSX.Element => {
  return <Page>Playlist {playlistId}</Page>;
};

export default Playlist;
