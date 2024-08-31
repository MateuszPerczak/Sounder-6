import { readFile } from "fs/promises";
import { type IPicture, parseFile, selectCover } from "music-metadata";
import { parse } from "path";

import type { SongBytes, SongCover, SongMetadata } from "./audio.types";

export const getSongCover = (picture: IPicture[] | undefined): SongCover | undefined => {
  const cover = selectCover(picture);

  if (cover === null) {
    return;
  }

  return { data: cover.data, format: cover.format };
};

export const getSongMetadata = async (path: string): Promise<SongMetadata> => {
  const {
    common: { title, artist, artists, album, year, genre, picture },
    format: { bitrate, sampleRate, duration, lossless, container },
  } = await parseFile(path, { skipPostHeaders: true });

  const cover = getSongCover(picture);

  return {
    title: title || parse(path).name,
    artist,
    artists,
    album,
    year,
    genre,
    bitrate,
    sampleRate,
    duration,
    lossless,
    container,
    cover,
  };
};

export const getSongBytes = async (path: string): Promise<SongBytes> => {
  try {
    const { buffer, byteLength } = await readFile(path);
    return { buffer, byteLength, status: "ok" };
  } catch (err) {
    return { status: "err" };
  }
};
