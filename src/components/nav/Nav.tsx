import NavButton from "./components/navButton/NavButton";
import NavLogo from "./components/navLogo/NavLogo";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <NavButton hex="&#xE1D3;" label="Library" />
      <NavButton hex="&#xE721;" label="Search" />
      <NavButton hex="&#xE006;" label="Favorites" />
      <div className="nav-spacer" />
      <NavButton hex="&#xE713;" label="Settings" />
    </StyledNav>
  );
};

export default Nav;
