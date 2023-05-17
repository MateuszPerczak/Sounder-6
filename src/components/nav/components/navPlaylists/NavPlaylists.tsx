import NavLink from "../navLink/NavLink";
import StyledNavPlaylist from "./NavPlaylists.styles";
import type { NavPlaylistsProps } from "./NavPlaylists.types";

const NavPlaylists = ({ ...rest }: NavPlaylistsProps): JSX.Element => {
  return (
    <StyledNavPlaylist {...rest}>
      <NavLink hex="&#xE170;" label="Playlist 1" to="playlist/i325yfn8" />
      <NavLink hex="&#xE11D;" label="Playlist 2" to="playlist/iacyrn7w" />
    </StyledNavPlaylist>
  );
};

export default NavPlaylists;
