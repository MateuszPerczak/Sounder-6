import { join } from "node:path";

import { readdir } from "fs/promises";

type ScanFoldersProps = {
  folders: string[];
  extensions: string[];
  recursive: boolean;
};

export const scanFolders = async ({
  folders,
  extensions,
  recursive,
}: ScanFoldersProps): Promise<string[]> => {
  const songsPaths: string[] = [];

  const temp_folders: string[] = [...folders];

  for (const folder of temp_folders) {
    const files = await readdir(folder, { withFileTypes: true, recursive });

    console.log(files);

    files.forEach((file) => {
      if (file.isDirectory()) temp_folders.push(join(folder, file.name));
      if (file.isFile() && extensions.includes(file.name.split(".").pop() || ""))
        songsPaths.push(join(folder, file.name));
    });

    // for (const file of files) {
    //   if (file.isDirectory()) {
    //     console.log(`${join(folder, file.name)}\n`);
    //     // temp_folders.push(join(folder, file.name));
    //   }
    //   //   if (file.isFile() && extensions.includes(file.name.split(".").pop() || "")) {
    //   //     // console.log(file.name);
    //   //     // songsPaths.push(join(folder, file.name));
    //   //   }
    // }
  }

  return songsPaths;
};
