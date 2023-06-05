import { create, type StoreApi, type UseBoundStore } from "zustand";

import type { SettingsState } from "./settings.types";

const useSettings: UseBoundStore<StoreApi<SettingsState>> = create<SettingsState>(
  (set) => ({
    settings: {
      folders: [],
    },
    setSettings: (settings) => set({ settings }),
  }),
);

export default useSettings;
