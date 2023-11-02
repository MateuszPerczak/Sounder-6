import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  showDevTools: (): void => ipcRenderer.send("show-dev-tools"),
  openFolderPicker: (): Promise<string[] | undefined> => ipcRenderer.invoke("open-folder-picker"),
  openFilePicker: (): Promise<Buffer | undefined> => ipcRenderer.invoke("open-file-picker"),
  scanFolders: (folders: string[]): Promise<string[]> => ipcRenderer.invoke("scan-folders", folders),
  getSongMetadata: (path: string): Promise<void> => ipcRenderer.invoke("get-song-metadata", path),
});
