import Icon from "@/components/icon/Icon";

import StyledNavButton from "./NavButton.styles";
import { type NavButtonProps } from "./NavButton.types";

const NavButton = ({ label, onClick, ...rest }: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton onClick={onClick}>
      <Icon {...rest} />
      <span className="button-label">{label}</span>
    </StyledNavButton>
  );
};

export default NavButton;
