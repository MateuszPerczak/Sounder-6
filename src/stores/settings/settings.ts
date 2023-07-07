import { create, type StoreApi, type UseBoundStore } from "zustand";

import type { SettingsState } from "./settings.types";

const useSettings: UseBoundStore<StoreApi<SettingsState>> = create<SettingsState>(
  (set) => ({
    settings: {
      folders: [],
      theme: "system",
    },
    setSettings: (setting) => set((settings) => ({ ...settings, ...setting })),
    addFolders: (folders): void =>
      set(({ settings }) => ({
        settings: {
          ...settings,
          folders: [...settings.folders, ...folders],
        },
      })),
  }),
);

export default useSettings;
