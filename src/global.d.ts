interface Window {
  api: {
    showDevTools: () => void;
    openFolderPicker: () => Promise<string[] | undefined>;
    openFilePicker: () => Promise<Uint8Array | undefined>;
    scanFolders: (folders: string[]) => Promise<{ folders: string[]; files: string[] }>;
    getSongMetadata: (path: string) => Promise<{
      year?: number;
      title?: string;
      artist?: string;
      artists?: string[];
      album?: string;
      date?: string;
      genre?: string[];
      picture?: {
        format: string;
        data: Buffer;
        description?: string;
        type?: string;
        name?: string;
      }[];
      bpm?: number;
    }>;
  };
}
