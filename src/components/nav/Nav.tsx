import { useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";

import usePlaylists from "@/stores/playlists/playlists";

import { Icons } from "../icon/Icon.types";
import NavButton from "./components/navButton/NavButton";
import NavLink from "./components/navLink/NavLink";
import NavPlaylists from "./components/navPlaylists/NavPlaylists";
import NavSearch from "./components/navSearch/NavSearch";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  const navigate = useNavigate();
  const { playlists, addPlaylist } = usePlaylists((state) => state, shallow);

  const onAddPlaylist = (): void => navigate(`/playlist/${addPlaylist()}`);

  return (
    <StyledNav>
      <div className="nav-container">
        <NavLink icon={Icons.Library} label="Library" to="library" />
        <NavSearch />
        <NavLink icon={Icons.Heart} label="Favorites" to="playlist/favorites" />
        <span className="nav-label">Playlists</span>
        <NavButton icon={Icons.Add} label="Add playlist" onClick={onAddPlaylist} />
      </div>
      <NavPlaylists playlists={playlists} />
      <div className="nav-container">
        <NavLink icon={Icons.GiftBox} label="Updates" to="updates" />
        <NavLink icon={Icons.Settings} label="Settings" to="settings" />
      </div>
    </StyledNav>
  );
};

export default Nav;
