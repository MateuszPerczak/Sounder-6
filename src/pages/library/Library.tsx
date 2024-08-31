import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import { useApi } from "@/hooks";

import StyledLibrary from "./Library.styles";

const Library = (): JSX.Element => {
  const [params] = useSearchParams();

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const { scanFolders, openFolderPicker } = useApi();

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
    const files = await scanFolders(folders);
    // const buffer = await openFilePicker();

    // if (buffer === undefined) {
    //   return;
    // }

    // const blob = new Blob([buffer], { type: "audio/wav" });
    // const url = window.URL.createObjectURL(blob);

    // setAudio(new Audio(url));

    console.log(files);
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
            <Badge icon={Icons.Audio} label="84" />
            <Badge icon={Icons.Clock} label="2h 30m" />
          </>
        }
        content={
          <>
            <StyledLibrary>
              {/* {Array.from({ length: 20 }, (_, index) => index).map((element) => (
                <Song key={element} />
              ))} */}
            </StyledLibrary>
          </>
        }
      />
    </>
  );
};

export default Library;
