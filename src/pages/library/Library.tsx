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
  const { scanFolders, openFolderPicker, getSongMetadata } = useApi();

  // const openFile = async (): Promise<void> => {
  //   const files = (await window.api.openFilePicker()) as Uint8Array;
  //   if (!files) return;

  //   const blob = new Blob([files], { type: "audio/wav" });
  //   const url = window.URL.createObjectURL(blob);
  //   console.log(url);
  //   setSrc(url);
  //   // const test = new Audio(url);
  //   // setAudio(test);

  //   console.log(files);
  // };
  const openFile = async (): Promise<void> => {
    const folders = await openFolderPicker();

    if (folders === undefined) {
      return;
    }
    const { files } = await scanFolders(folders);

    const getCover = (
      pictures: Awaited<ReturnType<typeof getSongMetadata>>["picture"],
    ): string | undefined => {
      if (pictures === undefined || pictures.length === 0) {
        return;
      }

      console.log(pictures.length);
      const picture = pictures.at(0);

      if (picture === undefined) {
        return;
      }

      // return `data:${picture.format};base64,${picture.data.toString("base64")}`;
      const data = new Uint8Array(picture.data);

      const resource = URL.createObjectURL(new Blob([data], { type: picture.type }));
      console.log(data);
      console.log(resource);
      return resource;
    };

    files.forEach(async (file) => {
      const { title, album, artist, picture } = await getSongMetadata(file);

      setSongs((prevSongs) => [
        ...prevSongs,
        {
          id: v4(),
          album,
          artist,
          cover: getCover(picture),
          title: title ?? file,
        },
      ]);
    });

    // const buffer = await openFilePicker();

    // if (buffer === undefined) {
    //   return;
    // }

    // const blob = new Blob([buffer], { type: "audio/wav" });
    // const url = window.URL.createObjectURL(blob);

    // setAudio(new Audio(url));

    console.log(files);
    // await getSongMetadata(file);
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
