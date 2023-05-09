import styled from "@emotion/styled";

const StyledNavSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  transition: outline 200ms;
  outline: 1px solid ${({ theme: { navSearch } }): string => navSearch};
  .search-input {
    border: none;
    background-color: ${({ theme: { navSearch } }): string => navSearch};
    outline: none;
    color: ${({ theme: { color } }): string => color};
    width: 100%;
    height: 100%;
    font-size: 12px;
    ::placeholder {
      color: ${({ theme: { color } }): string => color};
    }
    ::selection {
      background-color: ${({ theme: { color } }): string => color};
      color: ${({ theme: { navSearchSelection } }): string => navSearchSelection};
    }
  }
  &:hover,
  &:focus-within,
  &:has(.search-input:not(:placeholder-shown)) {
    outline: 1px solid ${({ theme: { navSearchSelected } }): string => navSearchSelected};
  }
`;

export default StyledNavSearch;

//   &:hover,
//   &:active,
//   &:focus-within {
//     outline: 1px solid ${({ theme: { navButtonSelected } }): string => navButtonSelected};
//   }
//   &:focus-within > input {
//     ::placeholder {
//       color: gray;
//     }
//   }
//   & > input {
//     border: none;
//     background-color: transparent;
//     outline: none;
//     color: ${({ theme: { color } }): string => color};
//     width: 100%;
//     height: 100%;
//     font-size: 12px;
//     ::placeholder {
//       color: ${({ theme: { color } }): string => color};
//       transition: color 200ms;
//     }
//   }
