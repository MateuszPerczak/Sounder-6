import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { Icons } from "@/components/icon/Icon.types";

import type { UsePlaylist } from "./usePlaylist.types";

const usePlaylist: UsePlaylist = () => {
  const navigate = useNavigate();

  const createPlaylist = (): void => {
    const id = v4();
    // setStore((prevStore) => {
    //   return {
    //     ...prevStore,
    //     playlists: {
    //       ...prevStore.playlists,
    //       [id]: {
    //         id,
    //         name: `New Playlist #${Object.keys(prevStore.playlists).length}`,
    //         icon: Icons.Playlist,
    //         songs: [],
    //       },
    //     },
    //   };
    // });
    navigate(`playlist/${id}`);
  };

  return {
    createPlaylist,
    playlists: [],
  };
};

export default usePlaylist;
