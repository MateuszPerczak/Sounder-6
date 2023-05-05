import Icon from "@/components/icon/Icon";

import StyledNavButton from "./NavButton.styles";
import { NavButtonProps } from "./NavButton.types";

const NavButton = ({ label, onClick, ...rest }: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton>
      <Icon {...rest} />
      <span>{label}</span>
    </StyledNavButton>
  );
};

export default NavButton;
