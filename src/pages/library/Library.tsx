import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { v4 } from "uuid";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Song from "@/components/song/Song";
import type { SongProps } from "@/components/song/Song.types";
import { useApi } from "@/hooks";

import StyledLibrary from "./Library.styles";

const Library = (): JSX.Element => {
  const [params] = useSearchParams();
  const [songs, setSongs] = useState<SongProps[]>([]);
  const { scanFolders, openFolderPicker, getSongMetadata, getSongBytes } = useApi();

  const openFile = async (): Promise<void> => {
    const folders = await openFolderPicker();

    if (folders === undefined) {
      return;
    }
    const { files } = await scanFolders(folders);

    const getCover = (
      picture: Awaited<ReturnType<typeof getSongMetadata>>["cover"],
    ): string | undefined => {
      if (picture === undefined) {
        return;
      }
      const resource = URL.createObjectURL(
        new Blob([picture.data], { type: picture.format }),
      );
      return resource;
    };

    files.forEach(async (file) => {
      const { title, album, artist, cover } = await getSongMetadata(file);
      const song = await getSongBytes(file);
      if (song.status === "ok") {
        const { buffer } = song;
        const blob = new Blob([buffer], { type: "audio/wav" });
        const url = window.URL.createObjectURL(blob);

        const test = new Audio(url);
        test.play();
      }
      setSongs((prevSongs) => [
        ...prevSongs,
        {
          id: v4(),
          album,
          artist,
          cover: getCover(cover),
          title: title ?? file,
        },
      ]);
    });
  };

  const search = params.get("search");

  return (
    <>
      <Page
        name="Library"
        menu={
          <>
            {search && (
              <Badge
                icon={Icons.Search}
                label={`Showing results for "${search}"`}
                transition
              />
            )}
            <Button icon={Icons.Play} onClick={openFile} />
            <Badge icon={Icons.Audio} label={`${songs.length}`} />
            <Badge icon={Icons.Clock} label="2h 30m" />
          </>
        }
        content={
          <>
            <StyledLibrary>
              {songs.map((song) => (
                <Song {...song} key={song.id} />
              ))}
            </StyledLibrary>
          </>
        }
      />
    </>
  );
};

export default Library;
