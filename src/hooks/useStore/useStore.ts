import { useState } from "react";

import type { StoreState, UseStore } from "./useStore.types";

export const useStore: UseStore = () => {
  const [store, setStore] = useState<StoreState>({
    playlists: {},
  });
  return { store, setStore };
};
