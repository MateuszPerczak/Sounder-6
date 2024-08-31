import { join } from "node:path";

import { readdir } from "fs/promises";

import type {
  GetFilesFromDirectoryProps,
  ScanFolderProps,
  ScanFolderResult,
} from "./fileSystem.types";

export const getFilesFromDirectory = async ({
  paths,
  extension,
  recursive,
}: GetFilesFromDirectoryProps): Promise<string[]> => {
  const temp_paths: string[] = [...paths];

  return [];
};

const scanFolder = async ({
  path,
  recursive,
}: ScanFolderProps): Promise<ScanFolderResult> => {
  const dirents = await readdir(path, { recursive, withFileTypes: true });

  const files = [];
  const folders = [];

  for (const dirent of dirents) {
    const joinedPath = join(path, dirent.name);
    dirent.isDirectory() && folders.push(joinedPath);
    dirent.isFile() && files.push(joinedPath);
  }

  return { files, folders };
};
