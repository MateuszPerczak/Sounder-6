export type SongMetadata = {
  title: string;
  artist?: string;
  artists?: string[];
  album?: string;
  year?: number;
  genre?: string[];
  bitrate?: number;
  sampleRate?: number;
  duration?: number;
  lossless?: boolean;
  container?: string;
  cover?: SongCover;
};

export type SongCover = {
  data: Buffer;
  format: string;
};
