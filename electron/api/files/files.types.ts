export type ScanFoldersProps = {
  paths: string[];
  recursive?: boolean;
  extensions?: Extension[];
};

export type Extension = "mp3" | "ogg" | "flac" | "wav";

export type ScanFolderProps = {
  path: string;
  recursive?: boolean;
};

export type FilesAndFolders = {
  files: string[];
  folders: string[];
};
