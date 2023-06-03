import styled from "@emotion/styled";

const StyledNavPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
    padding: 0 0 0 10px;
  }
  padding: 0 10px;
`;

export default StyledNavPlaylists;
