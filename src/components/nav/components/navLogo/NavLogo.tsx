import { memo } from "react";

import Icon from "@/components/icon/Icon";

import StyledNavLogo from "./NavLogo.styles";

const NavLogo = (): JSX.Element => {
  return (
    <StyledNavLogo>
      <Icon hex="&#xE189;" />
      <span className="text">Sounder</span>
    </StyledNavLogo>
  );
};

export default memo(NavLogo);
