import { type NavigationPageId } from "@/hooks/useNavigation/useNavigation.types";

import NavButton from "./components/navButton/NavButton";
import NavSearch from "./components/navSearch/NavSearch";
import StyledNav from "./Nav.styles";
import { type NavProps } from "./Nav.types";

const Nav = ({ navigateTo, currentPageId }: NavProps): JSX.Element => {
  const handleClick = (pageId: NavigationPageId): void => {
    navigateTo(pageId);
  };

  return (
    <StyledNav>
      <NavButton
        hex="&#xE1D3;"
        label="Library"
        onClick={(): void => handleClick("library")}
        selected={currentPageId === "library"}
      />
      <NavSearch />
      <NavButton
        hex="&#xE006;"
        label="Favorites"
        onClick={(): void => handleClick("favorites")}
        selected={currentPageId === "favorites"}
      />
      <div className="nav-spacer" />
      {/* <NavButton
        hex="&#xF133;"
        label="Updates"
        onClick={(): void => handleClick("updates")}
        selected={currentPageId === "updates"}
      /> */}
      <NavButton
        hex="&#xE713;"
        label="Settings"
        onClick={(): void => handleClick("settings")}
        selected={currentPageId === "settings"}
      />
    </StyledNav>
  );
};

export default Nav;
