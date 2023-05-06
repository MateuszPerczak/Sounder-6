import NavButton from "./components/navButton/NavButton";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <NavButton hex="&#xE1D3;" label="Library" to="library" />
      <NavButton hex="&#xE721;" label="Search" to="search" />
      <NavButton hex="&#xE006;" label="Favorites" to="favorites" />
      <div className="nav-spacer" />
      <NavButton hex="&#xF133;" label="Updates" to="updates" />
      <NavButton hex="&#xE713;" label="Settings" to="settings" />
    </StyledNav>
  );
};

export default Nav;
