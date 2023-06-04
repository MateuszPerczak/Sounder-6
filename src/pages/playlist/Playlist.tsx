import { useParams, useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";

import type { PlaylistProps } from "./Playlist.types";

const Playlist = (): JSX.Element => {
  const { id } = useParams<PlaylistProps>();
  const [params] = useSearchParams();

  const search = params.get("search");

  // const playlist = id && playlists[id];

  return (
    <Page
      name={id}
      menu={
        <>
          {search && (
            <Badge icon={Icons.Search} label={`Showing results for "${search}"`} />
          )}
          <Button icon={Icons.Play} />
          <Badge icon={Icons.Audio} label="84" />
          <Badge icon={Icons.Clock} label="2h 30m" />
        </>
      }
      content={
        <>
          <Icon icon={Icons.Playlist} size={128} />
        </>
      }
    />
  );
};

export default Playlist;
