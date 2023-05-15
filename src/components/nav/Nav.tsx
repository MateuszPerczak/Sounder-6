import NavButton from "./components/navButton/NavButton";
import NavLink from "./components/navLink/NavLink";
import NavPlaylists from "./components/navPlaylists/NavPlaylists";
import NavSearch from "./components/navSearch/NavSearch";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <div className="nav-container">
        <NavLink hex="&#xE1D3;" label="Library" to="library" />
        <NavSearch />
        <NavLink hex="&#xE006;" label="Favorites" to="playlist/favorites" />
        <span className="nav-label">Playlists</span>
        <NavButton hex="&#xE109;" label="Add playlist" />
      </div>
      <NavPlaylists />
      <div className="nav-container">
        {/* <NavLink hex="&#xF133;" label="Updates" to="updates" /> */}
        <NavLink hex="&#xE713;" label="Settings" to="settings" />
      </div>
    </StyledNav>
  );
};

export default Nav;
