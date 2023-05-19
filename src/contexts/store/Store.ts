import { createContext } from "react";

import type { StoreContext } from "./Store.types";

const Store = createContext<StoreContext>({} as StoreContext);

export default Store;
