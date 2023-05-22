import { useContext } from "react";
import { useParams } from "react-router-dom";

import Icon from "@/components/icon/Icon";
import Page from "@/components/page/Page";
import Store from "@/contexts/store/Store";
import { type Playlist } from "@/hooks/useStore/useStore.types";

import type { PlaylistProps } from "./Playlist.types";

const Playlist = (): JSX.Element => {
  const { id } = useParams<PlaylistProps>();
  const {
    store: { playlists },
  } = useContext(Store);

  const playlist = id && playlists[id];

  // const playlistData = getPlaylist(id);
  return (
    <Page>
      <Icon hex={id === "favorites" ? "\uEB51" : "\uE93C"} size={128} />
      {playlist && playlist.name}
    </Page>
  );
};

export default Playlist;
