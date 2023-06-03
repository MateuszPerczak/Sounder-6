import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";

import StyledUpdates from "./Updates.styles";

const Updates = (): JSX.Element => {
  return (
    <Page
      name="Updates"
      menu={<></>}
      content={
        <StyledUpdates>
          <Icon icon={Icons.Download} size={128} />
        </StyledUpdates>
      }
    />
  );
};

export default Updates;
