import styled from "@emotion/styled";
import { type MouseEvent, useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Menu from "@/components/menu/Menu";
import type { MenuProps } from "@/components/menu/Menu.types";
import Page from "@/components/page/Page";

import StyledLibrary from "./Library.styles";

const Song = styled.div`
  flex: 0 0 50px;
  border-radius: 4px;
  border: 1px solid ${({ theme: { stroke } }): string => stroke};
  background-color: ${({ theme: { fill } }): string => fill};
  /* &:hover {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
    border: 1px solid ${({ theme: { strokeHover } }): string => strokeHover};
  }
  &:active {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
    border: 1px solid ${({ theme: { strokeActive } }): string => strokeActive};
  } */
`;

const Library = (): JSX.Element => {
  const { 0: params } = useSearchParams();

  const [menu, setMenu] = useState<MenuProps | undefined>(undefined);

  const showMenu = (event: MouseEvent<HTMLDivElement>): void => {
    menu ? setMenu(undefined) : setMenu({ x: event.pageX, y: event.pageY });
  };

  const search = params.get("search");

  return (
    <>
      {menu && <Menu {...menu} />}
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
            <Badge icon={Icons.Audio} label="84" />
            <Badge icon={Icons.Clock} label="2h 30m" />
            <Button icon={Icons.Menu} />
          </>
        }
        content={
          <StyledLibrary onContextMenu={showMenu}>
            {Array.from({ length: 30 }, (_, index) => (
              <Song key={index} />
            ))}
          </StyledLibrary>
        }
      />
    </>
  );
};

export default Library;
