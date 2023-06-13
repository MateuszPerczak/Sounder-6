import styled from "@emotion/styled";

import CheckBox from "@/components/checkBox/CheckBox";
import ComboBox from "@/components/comboBox/ComboBox";
import Expander from "@/components/expander/Expander";
import { Icons } from "@/components/icon/Icon.types";
import Switch from "@/components/switch/Switch";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  height: 50px;
  width: 100%;
  font-size: 12px;
  font-weight: 300;
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
          <CheckBox label="Enable mica" checked />
        </Wrapper>
        <Wrapper>
          <span>Enable deep search</span>
          <Switch />
        </Wrapper>
        <Wrapper>
          <span>Theme</span>
          {/* <ComboBox /> */}
        </Wrapper>
      </Expander>
    </>
  );
};

export default Folders;
