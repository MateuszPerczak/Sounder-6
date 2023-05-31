import { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Page from "@/components/page/Page";
import Store from "@/contexts/store/Store";
import { type Playlist } from "@/hooks/useStore/useStore.types";

import type { PlaylistProps } from "./Playlist.types";

const Playlist = (): JSX.Element => {
  const { id } = useParams<PlaylistProps>();
  const [params] = useSearchParams();

  const search = params.get("search");

  const {
    store: { playlists },
  } = useContext(Store);

  const playlist = id && playlists[id];

  const name =
    (id === "favorites" ? "Favorites" : playlist && playlist.name) ?? "Unknown";
  return (
    <Page
      name={name}
      toolbar={
        <>
          {search && <Badge hex="&#xE094;" label={`Showing results for "${search}"`} />}
          <Badge hex="&#xE189;" label="84" />
          <Badge hex="&#xE121;" label="2h 30m" />
        </>
      }
      content={<></>}
    />
  );
};

export default Playlist;
