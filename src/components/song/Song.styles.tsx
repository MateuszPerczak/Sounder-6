import styled from "@emotion/styled";

const StyledSong = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex: 0 0 50px;
  border-radius: 4px;
  gap: 10px;
  background-color: ${({ theme: { backgroundLayer } }): string => backgroundLayer};
  border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
`;

export const SongCover = styled.img`
  height: 40px;
  aspect-ratio: 1;
  background-color: ${({ theme: { smoke } }): string => smoke};
  border-radius: 4px;
`;

export const SongLabels = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  gap: 5px;
  font-size: 12px;
  flex: 1;
  & > *:nth-child(2) {
    color: ${({ theme: { textSecondary } }): string => textSecondary};
    font-size: 10px;
  }
`;

export default StyledSong;

/* 
  .song-cover {
    width: 35px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid ${({ theme: { stroke } }): string => stroke};
    opacity: 0.5;
  }
  .song-labels {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    flex: 1;
  }
  .song-title {
    color: ${({ theme: { textPrimary } }): string => textPrimary};
  }
  .song-description {
    color: ${({ theme: { textSecondary } }): string => textSecondary};
    font-size: 12px;
  }
  .seperator {
    flex: 1;
  }
  .song-album {
    flex: 1;
    color: ${({ theme: { textSecondary } }): string => textSecondary};
    font-size: 12px;
  } */
