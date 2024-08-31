import { create, type StoreApi, type UseBoundStore } from "zustand";

import type { SettingsState } from "./settings.types";

const useSettings: UseBoundStore<StoreApi<SettingsState>> = create<SettingsState>(
  (set) => ({
    settings: {
      folders: [],
      theme: "system",
      isScanRecursive: true,
    },
    setSettings: (newSettings): void =>
      set(({ settings }) => ({ settings: { ...settings, ...newSettings } })),
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
