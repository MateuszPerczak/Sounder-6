import Icon from "../icon/Icon";
import StyledMenu from "./Menu.styles";
import type { MenuProps } from "./Menu.types";

const Menu = (props: MenuProps): JSX.Element => {
  return (
    <StyledMenu {...props}>
      <div className="menu-content">
        <div className="menu-item">
          <Icon hex="&#xE104;" size={14} />
          <span>Edit</span>
        </div>
        <div className="menu-item">
          <Icon hex="&#xE16F;" size={14} />
          <span>Copy</span>
        </div>
        <div className="menu-item">
          <Icon hex="&#xE72D;" size={14} />
          <span>Share</span>
        </div>
        <div className="menu-item">
          <Icon hex="&#xE107;" size={14} />
          <span>Remove</span>
        </div>
      </div>
    </StyledMenu>
  );
};

export default Menu;
