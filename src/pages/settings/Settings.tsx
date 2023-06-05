import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import { useApi } from "@/hooks";
import useSettings from "@/stores/settings/settings";

import StyledSettings from "./Settings.styles";

const Settings = (): JSX.Element => {
  const settings = useSettings((state) => state.settings);

  const [params] = useSearchParams();

  const { openFolderPicker } = useApi();

  const [state, setState] = useState<string[]>([]);
  const openFolder = async (): Promise<void> => {
    const folders = await openFolderPicker();
    folders && setState(folders);
    console.log(folders);
  };

  const search = params.get("search");

  return (
    <Page
      name="Settings"
      menu={
        <>
          {search && (
            <Badge
              icon={Icons.Search}
              label={`Showing results for "${search}"`}
              transition
            />
          )}
          <Button icon={Icons.Save} label="Save" disabled />
          {/* <Button icon={Icons.Import} label="Import" /> */}
          <Button icon={Icons.Refresh} label="Check for updates" />
          <Button icon={Icons.AddFolder} label="Add folders" onClick={openFolder} />
        </>
      }
      content={
        <StyledSettings>
          <Icon icon={Icons.Settings} size={128} />
        </StyledSettings>
      }
    />
  );
};

export default Settings;
