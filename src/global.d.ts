interface Window {
  api: {
    showDevTools: () => void;
    openFolderPicker: () => Promise<string[] | undefined>;
    openFilePicker: () => Promise<Uint8Array | undefined>;
    scanFolders: (folders: string[]) => Promise<{ folders: string[]; files: string[] }>;
    getSongMetadata: (path: string) => Promise<{
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
      cover?: {
        data: Buffer;
        format: string;
      };
    }>;
    getSongBytes: (path: string) => Promise<
      | {
          status: "ok";
          buffer: ArrayBuffer;
          byteLength: number;
        }
      | {
          status: "err";
        }
    >;
  };
}
