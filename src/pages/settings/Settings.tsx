import styled from "@emotion/styled";

import Button from "@/components/button/Button";
import CheckBox from "@/components/checkBox/CheckBox";
import ComboBox from "@/components/comboBox/ComboBox";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import StackPanel from "@/components/stackPanel/StackPanel";
import { useApi } from "@/hooks";
import useSettings from "@/stores/settings/settings";
import type { SettingsStore } from "@/stores/settings/settings.types";

import { themes } from "./Settings.options";

const StyledFolder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 300;
`;

const Settings = (): JSX.Element => {
  const { settings, setSettings, addFolders } = useSettings(
    ({ settings, setSettings, addFolders }) => ({
      settings,
      setSettings,
      addFolders,
    }),
  );

  const { openFolderPicker } = useApi();

  const openFolder = async (): Promise<void> => {
    const folders = await openFolderPicker();
    console.log(folders);
    folders && addFolders(folders);
  };

  const restoreDefaults = (): void => {
    console.log("restoreDefaults");
  };

  return (
    <Page
      name="Settings"
      menu={
        <>
          {/* <Button icon={Icons.Save} label="Save" disabled /> */}
          <Button icon={Icons.Import} label="Import" />
          <Button icon={Icons.Save} label="Restore defaults" onClick={restoreDefaults} />
          <Button icon={Icons.Refresh} label="Check for updates" />
        </>
      }
      content={
        <>
          <Panel
            icon={Icons.Color}
            label="Theme"
            description="Choose app appearance"
            header={
              <ComboBox<SettingsStore["theme"]>
                options={themes}
                selectedOption={settings.theme}
                onChange={(theme): void => setSettings({ theme })}
              />
            }
          />

          <Panel icon={Icons.Folder} label="Folders">
            <StackPanel padding={10} flexDirection="column" gap={10}>
              <CheckBox
                label="Scan folders recursively"
                checked={settings.isScanRecursive}
                onChange={(isScanRecursive): void => setSettings({ isScanRecursive })}
              />
            </StackPanel>
          </Panel>

          <Panel icon={Icons.Library} label="Library">
            {/* <StackPanel padding={10} flexDirection="column"></StackPanel> */}
          </Panel>

          <Panel icon={Icons.Info} label="About">
            {/* <StackPanel padding={10}></StackPanel> */}
          </Panel>
        </>
      }
    />
  );
};

export default Settings;
