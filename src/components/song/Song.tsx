import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import Button from "./components/button/Button";
import StyledSong, { SongCover, SongLabels } from "./Song.styles";
import type { SongProps } from "./Song.types";

const Song = ({ id, album, artist, cover, title }: SongProps): JSX.Element => {
  return (
    <StyledSong>
      {cover ? <SongCover src={cover} /> : <Icon icon={Icons.Audio} />}
      <SongLabels>
        <div>{title}</div>
        <div>{artist}</div>
      </SongLabels>
    </StyledSong>
  );
};

export default Song;
