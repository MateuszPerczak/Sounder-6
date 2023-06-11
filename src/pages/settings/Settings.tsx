import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { shallow } from "zustand/shallow";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Expander from "@/components/expander/Expander";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import { useApi } from "@/hooks";
import useSettings from "@/stores/settings/settings";

import Panel from "./components/panel/Panel";
import StyledSettings from "./Settings.styles";

const Settings = (): JSX.Element => {
  const settings = useSettings(({ settings }) => settings);

  const [params] = useSearchParams();

  const { openFolderPicker } = useApi();

  const openFolder = async (): Promise<void> => {
    const folders = await openFolderPicker();
    // folders && addFolders(folders);
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
          <Button icon={Icons.Save} label="Save" />
          {/* <Button icon={Icons.Import} label="Import" /> */}
          {/* <Button icon={Icons.Refresh} label="Check for updates" /> */}
        </>
      }
      content={
        <>
          {/* <Panel icon={Icons.Folder} title="Folders"></Panel> */}
          <Expander icon={Icons.Folder} label="Folders">
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
            <Button icon={Icons.Refresh} label="Check for updates" />
          </Expander>
        </>
      }
    />
  );
};

export default Settings;
