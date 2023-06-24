import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import ComboBox from "@/components/comboBox/ComboBox";
import type { ComboBoxOption } from "@/components/comboBox/ComboBox.types";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import StackPanel from "@/components/stackPanel/StackPanel";
import { useApi } from "@/hooks";
import useSettings from "@/stores/settings/settings";

const Settings = (): JSX.Element => {
  const settings = useSettings(({ settings }) => settings);

  const { openFolderPicker } = useApi();

  const themes: ComboBoxOption[] = [
    {
      name: "Light",
      value: "light",
    },
    {
      name: "Dark",
      value: "dark",
    },
    {
      name: "System",
      value: "system",
    },
  ];

  const openFolder = async (): Promise<void> => {
    const folders = await openFolderPicker();
    // folders && addFolders(folders);
  };

  return (
    <Page
      name="Settings"
      menu={
        <>
          <Button icon={Icons.Save} label="Save" disabled />
          {/* <Button icon={Icons.Import} label="Import" /> */}
          {/* <Button icon={Icons.Refresh} label="Check for updates" /> */}
        </>
      }
      content={
        <>
          <Panel
            icon={Icons.Color}
            label="Theme"
            description="Choose app aperance"
            header={
              <ComboBox
                options={themes}
                selectedOption="system"
                onChange={(): null => null}
              />
            }
          />

          <Panel
            icon={Icons.Folder}
            label="Folders"
            description="Folders description"
          ></Panel>
        </>
      }
    />
  );
};

export default Settings;
