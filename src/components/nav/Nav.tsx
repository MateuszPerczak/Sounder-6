import { type NavigationPageId } from "@/hooks/useNavigation/useNavigation.types";

import NavButton from "./components/navButton/NavButton";
import NavSearch from "./components/navSearch/NavSearch";
import StyledNav from "./Nav.styles";
import { type NavProps } from "./Nav.types";

const Nav = ({ navigateTo }: NavProps): JSX.Element => {
  const handleClick = (label: NavigationPageId): void => {
    navigateTo(label);
  };

  return (
    <StyledNav>
      <NavButton
        hex="&#xE1D3;"
        label="Library"
        onClick={(): void => handleClick("library")}
      />
      <NavSearch />
      {/* <NavButton hex="&#xE721;" label="Search" /> */}
      <NavButton hex="&#xE006;" label="Favorites" />
      <div className="nav-spacer" />
      <NavButton hex="&#xF133;" label="Updates" />
      <NavButton
        hex="&#xE713;"
        label="Settings"
        onClick={(): void => handleClick("settings")}
      />
    </StyledNav>
  );
};

export default Nav;
