import { useParams, useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import usePlaylists from "@/stores/playlists/playlists";

import type { PlaylistProps } from "./Playlist.types";

const Playlist = (): JSX.Element => {
  const { id } = useParams<PlaylistProps>();
  const [params] = useSearchParams();

  const search = params.get("search");

  const { getPlaylist } = usePlaylists(({ getPlaylist }) => ({ getPlaylist }));

  const playlist = (id && getPlaylist(id)) || { name: "Playlist not found" };

  return (
    <Page
      name={playlist.name}
      menu={
        <>
          {search && (
            <Badge
              icon={Icons.Search}
              label={`Showing results for "${search}"`}
              transition
            />
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
