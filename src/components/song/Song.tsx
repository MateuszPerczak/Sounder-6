import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import Button from "./components/button/Button";
import StyledSong, { SongCover, SongLabels } from "./Song.styles";

const Song = (): JSX.Element => {
  return (
    <StyledSong>
      <SongCover />
      <SongLabels>
        <div>Song title</div>
        <div>Song artist</div>
      </SongLabels>
    </StyledSong>
  );
};

export default Song;
