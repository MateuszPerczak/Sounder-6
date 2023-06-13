import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Expander from "@/components/expander/Expander";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import StackPanel from "@/components/stackPanel/StackPanel";
import { useApi } from "@/hooks";
import useSettings from "@/stores/settings/settings";

const Settings = (): JSX.Element => {
  const settings = useSettings(({ settings }) => settings);

  const { openFolderPicker } = useApi();

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
          <Expander icon={Icons.Folder} label="Folders"></Expander>
          <Expander icon={Icons.Color} label="Theme"></Expander>
          <Expander icon={Icons.HardDrive} label="File indexing"></Expander>
          <Expander icon={Icons.Search} label="Search"></Expander>
          <Expander
            icon={Icons.Info}
            label="About"
            description="Learn more about this app"
          >
            <StackPanel gap={10} flex={1}></StackPanel>
          </Expander>
        </>
      }
    />
  );
};

export default Settings;
