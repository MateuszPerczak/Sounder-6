import { useParams } from "react-router-dom";

import Icon from "@/components/icon/Icon";
import Page from "@/components/page/Page";

import type { PlaylistProps } from "./Playlist.types";

const Playlist = (): JSX.Element => {
  const { id } = useParams<PlaylistProps>();
  return (
    <Page>
      <Icon hex={id === "favorites" ? "\uEB51" : "\uE102"} size={128} />
      <span>{id}</span>
    </Page>
  );
};

export default Playlist;
