import { useState } from "react";

import type { StoreState, UseStore } from "./useStore.types";

const useStore: UseStore = () => {
  const [store, setStore] = useState<StoreState>({
    playlists: {},
  });
  return { store, setStore };
};

export default useStore;
