import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Icon from "@/components/icon/Icon";
import Page from "@/components/page/Page";

import StyledSettings from "./Settings.styles";

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
      content={<StyledSettings></StyledSettings>}
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
