import { resolve } from "node:path";

import { readdir } from "fs/promises";

import type { FilesAndFolders, ScanFolderProps, ScanFoldersProps } from "./files.types";

export const scanFolders = async ({
  paths,
  recursive,
  extensions,
}: ScanFoldersProps): Promise<FilesAndFolders> => {
  let files: string[] = [];
  const folders: string[] = [...paths];

  for (const folder of folders) {
    const filesAndFolders = await scanFolder({ path: folder, recursive });
    files.push(...filesAndFolders.files);
    folders.push(...filesAndFolders.folders);
  }

  if (extensions) {
    files = files.filter((file) =>
      extensions.some((extension) => file.endsWith(extension)),
    );
  }

  return { files, folders };
};

const scanFolder = async ({
  path,
  recursive,
}: ScanFolderProps): Promise<FilesAndFolders> => {
  const dirents = await readdir(path, { recursive, withFileTypes: true });

  const files: string[] = [];
  const folders: string[] = [];

  for (const dirent of dirents) {
    const resolvedPath = resolve(path, dirent.name);
    dirent.isDirectory() && folders.push(resolvedPath);
    dirent.isFile() && files.push(resolvedPath);
  }

  return { files, folders };
};
