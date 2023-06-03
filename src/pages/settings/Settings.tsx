import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";

import StyledSettings from "./Settings.styles";

const Settings = (): JSX.Element => {
  const [params] = useSearchParams();

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
