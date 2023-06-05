import NavLink from "../navLink/NavLink";
import StyledNavPlaylist from "./NavPlaylists.styles";
import type { NavPlaylistsProps } from "./NavPlaylists.types";

const NavPlaylists = ({ playlists, ...rest }: NavPlaylistsProps): JSX.Element => {
  return (
    <StyledNavPlaylist {...rest}>
      {playlists
        .filter(({ show }) => show)
        .map(({ name, icon, id }) => (
          <NavLink key={id} icon={icon} label={name} to={`playlist/${id}`} />
        ))}
    </StyledNavPlaylist>
  );
};

export default NavPlaylists;
