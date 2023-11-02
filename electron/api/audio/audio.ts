import { type ICommonTagsResult, parseFile } from "music-metadata";

export const getSongMetadata = async (path: string): Promise<ICommonTagsResult> => {
  const { common } = await parseFile(path);
  return common;
};
