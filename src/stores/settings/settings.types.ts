export type SettingsState = {
  settings: Settings;
  setSettings: (state: Settings) => void;
  addFolders: (folders: string[]) => void;
};

export type Settings = {
  folders: string[];
};
