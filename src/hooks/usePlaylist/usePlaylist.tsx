import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { Icons } from "@/components/icon/Icon.types";
import Store from "@/contexts/store/Store";

import type { UsePlaylist } from "./usePlaylist.types";

const usePlaylist: UsePlaylist = () => {
  const navigate = useNavigate();
  const { store, setStore } = useContext(Store);

  const createPlaylist = (): void => {
    const id = v4();
    setStore((prevStore) => {
      return {
        ...prevStore,
        playlists: {
          ...prevStore.playlists,
          [id]: {
            id,
            name: `New Playlist #${Object.keys(prevStore.playlists).length}`,
            icon: Icons.Playlist,
            songs: [],
          },
        },
      };
    });
    navigate(`playlist/${id}`);
  };

  return {
    createPlaylist,
    playlists: Object.values(store.playlists),
  };
};

export default usePlaylist;
