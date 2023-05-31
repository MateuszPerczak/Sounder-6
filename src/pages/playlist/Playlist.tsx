import { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Icon from "@/components/icon/Icon";
import Page from "@/components/page/Page";
import Store from "@/contexts/store/Store";
import { type Playlist } from "@/hooks/useStore/useStore.types";

import type { PlaylistProps } from "./Playlist.types";

const Playlist = (): JSX.Element => {
  const { id } = useParams<PlaylistProps>();
  const [search] = useSearchParams();

  const word = search.get("search");

  const {
    store: { playlists },
  } = useContext(Store);

  const playlist = id && playlists[id];

  const name =
    (id === "favorites" ? "Favorites" : playlist && playlist.name) ?? "Unknown";

  // const playlistData = getPlaylist(id);
  return (
    <Page
      name={name}
      toolbar={
        <>
          {word && <Badge hex="&#xE094;" label={`Showing results for "${word}"`} />}
          <Badge hex="&#xE189;" label="84" />
          <Badge hex="&#xE121;" label="2h 30m" />
        </>
      }
      content={<></>}
    />
  );
};

export default Playlist;
{
  /* 

      {playlist && playlist.name}
      {word && (
        <p>
          <Icon hex={"\uE11A"} size={14} />
          <span>Searching {word}</span>
        </p>
      )} */
}
