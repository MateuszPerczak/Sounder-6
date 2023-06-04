interface Window {
  api: {
    showDevTools: () => void;
    openFolderPicker: () => Promise<string[] | undefined>;
  };
}
