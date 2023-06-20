import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";

import StyledLibrary from "./Library.styles";

const Song = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  flex: 0 0 50px;
  border-radius: 4px;
  background-color: ${({ theme: { backgroundLayer } }): string => backgroundLayer};
  border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
`;

const Library = (): JSX.Element => {
  const [params] = useSearchParams();

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
            <Button icon={Icons.Play} />
            <Badge icon={Icons.Audio} label="84" />
            <Badge icon={Icons.Clock} label="2h 30m" />
          </>
        }
        content={
          <>
            <StyledLibrary>
              {Array.from({ length: 10 }, (_, index) => (
                <Song key={index}></Song>
              ))}
            </StyledLibrary>
          </>
        }
      />
    </>
  );
};

export default Library;
