import Icon from "@/components/icon/Icon";

import StyledNavButton from "./NavButton.styles";
import { NavButtonProps } from "./NavButton.types";

const NavButton = ({ label, onClick, to, ...rest }: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton onClick={onClick} to={to}>
      <Icon {...rest} />
      <span className="button-label">{label}</span>
    </StyledNavButton>
  );
};

export default NavButton;
