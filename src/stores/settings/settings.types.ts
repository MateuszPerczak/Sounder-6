export type SettingsState = {
  settings: SettingsStore;
  setSettings: (state: { [T in keyof SettingsStore]?: SettingsStore[T] }) => void;
  addFolders: (folders: string[]) => void;
};

export type SettingsStore = {
  folders: string[];
  isScanRecursive: boolean;
  theme: "dark" | "light" | "system";
};
