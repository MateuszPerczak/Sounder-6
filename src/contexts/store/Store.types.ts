import type { Dispatch, SetStateAction } from "react";

import type { StoreState } from "@/hooks/useStore/useStore.types";

export type StoreContext = {
  store: StoreState;
  setStore: Dispatch<SetStateAction<StoreContext["store"]>>;
};
