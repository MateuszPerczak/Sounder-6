import styled from "@emotion/styled";

import CheckBox from "@/components/checkBox/CheckBox";
import Expander from "@/components/expander/Expander";
import { Icons } from "@/components/icon/Icon.types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 50px;
  height: 50px;
  width: 100%;
`;

const Folders = (): JSX.Element => {
  return (
    <>
      <Expander
        icon={Icons.Folder}
        label="Folders"
        description="Add more folders to your library"
      >
        <Wrapper>
          <CheckBox label="Enable mica" disabled checked />
        </Wrapper>
      </Expander>
    </>
  );
};

export default Folders;
