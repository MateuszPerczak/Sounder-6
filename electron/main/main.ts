import { join } from "node:path";

import { app, BrowserWindow, dialog, ipcMain, Menu } from "electron";

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
    minWidth: 600,
    minHeight: 500,
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
      properties: ["openDirectory"],
    });

    if (canceled) return;
    return filePaths;
  });
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