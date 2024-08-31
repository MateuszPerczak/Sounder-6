export type GetFilesFromDirectoryProps = {
  paths: string[];
  extension: string[];
  recursive: boolean;
};

export type ScanFolderProps = {
  path: string;
  recursive?: boolean;
};

export type ScanFolderResult = {
  files: string[];
  folders: string[];
};
