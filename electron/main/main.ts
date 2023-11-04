import "v8-compile-cache";

import { join } from "node:path";

import { app, BrowserWindow, dialog, ipcMain, Menu } from "electron";

import { getSongBytes, getSongMetadata } from "../api/audio/audio";
import { scanFolders } from "../api/files/files";
import { type AppContent, Environment } from "./main.types";

process.env.DIST_ELECTRON = join(__dirname, "..");
process.env.DIST = join(process.env.DIST_ELECTRON, "..", "dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, "..", "public")
  : process.env.DIST;

const url: string = process.env.VITE_DEV_SERVER_URL;
const indexHtml: string = join(process.env.DIST, "index.html");
const env: Environment = (process.env.NODE_ENV as Environment) ?? Environment.Production;

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

// Make sure only one instance of the app is running
if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

const initApp = async (): Promise<void> => {
  await app.whenReady();

  const window: BrowserWindow = initMainWindow();

  // load app content
  appContent[env](window);

  window.on("ready-to-show", window.show);

  configApp();
  initApi();
};

const initMainWindow = (): BrowserWindow => {
  const preload = join(__dirname, "..", "preload", "preload.js");
  return new BrowserWindow({
    title: "",
    icon: join(process.env.PUBLIC, "favicon.ico"),
    webPreferences: {
      preload,
    },
    center: true,
    show: false,
    width: 1000,
    height: 600,
    minWidth: 910,
    minHeight: 570,
  });
};

const initApi = (): void => {
  // console.log(app.getPath("userData"));

  ipcMain.on("show-dev-tools", ({ sender }) => {
    const window = BrowserWindow.fromWebContents(sender);
    window && window.webContents.openDevTools();
  });

  ipcMain.handle("open-folder-picker", async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      title: "Select a folder",
      properties: ["openDirectory", "multiSelections"],
    });
    if (canceled) return;
    return filePaths;
  });

  ipcMain.handle("scan-folders", async (_, paths: string[]) => {
    return scanFolders({
      paths: paths,
      recursive: true,
      extensions: ["mp3", "ogg", "flac", "wav"],
    });
  });

  ipcMain.handle("get-song-metadata", async (_, path: string) => getSongMetadata(path));

  ipcMain.handle("get-song-bytes", async (_, path: string) => getSongBytes(path));

  // ipcMain.handle("open-file-picker", async () => {
  //   const { canceled, filePaths } = await dialog.showOpenDialog({
  //     title: "Select a folder",
  //     properties: ["openFile"],
  //     filters: [{ name: "Music files", extensions: ["mp3", "ogg", "flac", "wav"] }],
  //   });
  //   if (canceled) return;

  //   const fileBytes = readFileSync(filePaths[0]);
  //   console.log(fileBytes.buffer);
  //   return fileBytes;
  // });
};

const configApp = (): void => {
  Menu.setApplicationMenu(null);
};

const appContent: AppContent = {
  development: (window: BrowserWindow) => {
    window.loadURL(url);
  },
  production: (window: BrowserWindow) => {
    window.loadFile(indexHtml);
  },
};

initApp();
