import NavButton from "../navButton/NavButton";
import StyledNavPlaylist from "./NavPlaylists.styles";
import type { NavPlaylistsProps } from "./NavPlaylists.types";

const NavPlaylists = ({ ...rest }: NavPlaylistsProps): JSX.Element => {
  return (
    <StyledNavPlaylist {...rest}>
      {/* <NavButton hex="&#xE170;" label="Playlist 1" />
      <NavButton hex="&#xE11D;" label="Playlist 2" />
      <NavButton hex="&#xE93C;" label="Playlist 3" />
      <NavButton hex="&#xE958;" label="Playlist 4" /> */}
    </StyledNavPlaylist>
  );
};

export default NavPlaylists;
