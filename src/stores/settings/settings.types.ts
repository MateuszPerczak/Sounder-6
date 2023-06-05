export type SettingsState = {
  settings: Settings;
  setSettings: (state: Settings) => void;
};

export type Settings = {
  folders: string[];
};
