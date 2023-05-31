import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Icon from "@/components/icon/Icon";
import Page from "@/components/page/Page";

import StyledSettings from "./Settings.styles";

const StyledCard = styled.div`
  background-color: ${({ theme: { contrast } }): string => contrast};
  border-radius: 4px;
  padding: 10px;
`;
const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  aspect-ratio: 1;
  width: 35px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background-color 200ms;
  color: ${({ theme: { color } }): string => color};
  background-color: ${({ theme: { navButton } }): string => navButton};
  &:hover {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
`;

const StyledBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 10px;
  height: 35px;
  border-radius: 4px;
  background-color: ${({ theme: { contrast } }): string => contrast};
  font-size: 12px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledS = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  height: 50px;
  border-radius: 4px;
  background-color: #252525;
  margin-bottom: 10px;
`;

const StyledA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  font-size: 12px;
  .artist {
    font-size: 10px;
  }
`;
const StyledC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 30px;
`;

const StyledSong = ({ index, style }: any): JSX.Element => {
  return (
    <StyledS style={style}>
      <StyledC>
        <Icon hex="&#xEC4F;" />
      </StyledC>
      <StyledA>
        <span>Marcepan</span>
        <span className="artist">Sanah {index}</span>
      </StyledA>
    </StyledS>
  );
};
const Settings = (): JSX.Element => {
  const [search] = useSearchParams();

  const word = search.get("search");

  return (
    <Page
      name="Settings"
      toolbar={
        <>
          {word && <Badge hex="&#xE094;" label={`Showing results for "${word}"`} />}
          <Badge hex="&#xE118;" />
          <Badge hex="&#xE7BA;" />
          <Badge hex="&#xED55;" />

          <StyledButton>
            <Icon hex="&#xE712;" />
          </StyledButton>
        </>
      }
      content={
        <>
          <StyledWrapper></StyledWrapper>
        </>
      }
    />
  );
};

export default Settings;
{
  /* <div className="header">top bar</div>
<div className="content">content</div> */
}

{
  /* <StyledCard>ds</StyledCard> */
}
{
  /* <span className="group-title">User interface</span> */
}
{
  /* <Setting hex="&#xE8B7;" title="Folders"></Setting>
  <Setting hex="&#xE8D6;" title="Playback"></Setting>
  <Setting hex="&#xE946;" title="About"></Setting>
  <Setting hex="&#xE07F;" title="Accessibility"></Setting>
  <Setting hex="&#xE211;" title="Pc"></Setting> */
}
{
  /* <span className="group-title">Playback</span>
  <span className="group-title">Other</span> */
}
