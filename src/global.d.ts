interface Window {
  api: {
    showDevTools: () => void;
    openFolderPicker: () => Promise<string[] | undefined>;
    openFilePicker: () => Promise<Uint8Array | undefined>;
    scanFolders: (folders: string[]) => Promise<string[]>;
  };
}
