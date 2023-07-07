import Button from "@/components/button/Button";
import ComboBox from "@/components/comboBox/ComboBox";
import type { ComboBoxOption } from "@/components/comboBox/ComboBox.types";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import { useApi } from "@/hooks";
import useSettings from "@/stores/settings/settings";
import type { SettingsStore } from "@/stores/settings/settings.types";

const Settings = (): JSX.Element => {
  const { settings, setSettings } = useSettings(({ settings, setSettings }) => ({
    settings,
    setSettings,
  }));

  const { openFolderPicker } = useApi();

  const themes: ComboBoxOption<SettingsStore["theme"]>[] = [
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
            description="Choose app appearance"
            header={
              <ComboBox<SettingsStore["theme"]>
                options={themes}
                selectedOption={settings.theme}
                onChange={(theme): void => setSettings({ theme })}
              />
            }
          />

          <Panel
            icon={Icons.Folder}
            label="Folders"
            header={
              <>
                <Button icon={Icons.Add} label="Add folder" onClick={openFolder} />
              </>
            }
          ></Panel>
        </>
      }
    />
  );
};

export default Settings;
