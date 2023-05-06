import NavButton from "./components/navButton/NavButton";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <NavButton hex="&#xE1D3;" label="Library" />
      <NavButton hex="&#xE721;" label="Search" />
      <NavButton hex="&#xE006;" label="Favorites" />
      <div className="nav-spacer" />
      <NavButton hex="&#xF133;" label="Updates" />
      <NavButton hex="&#xE713;" label="Settings" />
    </StyledNav>
  );
};

export default Nav;
