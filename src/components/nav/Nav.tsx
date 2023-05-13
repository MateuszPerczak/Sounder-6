import NavButton from "./components/navButton/NavButton";
import NavPlaylists from "./components/navPlaylists/NavPlaylists";
import NavSearch from "./components/navSearch/NavSearch";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  // const handleClick = (pageId: NavigationPageId): void => {
  //
  // };
  return (
    <StyledNav>
      <NavButton hex="&#xE1D3;" label="Library" />
      <NavSearch />
      <NavButton hex="&#xE006;" label="Favorites" />
      <span className="nav-label">Playlists</span>
      <NavButton hex="&#xE109;" label="Add playlist" />
      <NavPlaylists />
      {/* <NavButton
        hex="&#xF133;"
        label="Updates"
      /> */}
      <NavButton hex="&#xE713;" label="Settings" />
    </StyledNav>
  );
};

export default Nav;
