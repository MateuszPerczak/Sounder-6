import { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Store from "@/contexts/store/Store";

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
      menu={
        <>
          {search && (
            <Badge icon={Icons.Search} label={`Showing results for "${search}"`} />
          )}
          <Badge icon={Icons.Audio} label="84" />
          <Badge icon={Icons.Clock} label="2h 30m" />
        </>
      }
      content={<></>}
    />
  );
};

export default Playlist;
