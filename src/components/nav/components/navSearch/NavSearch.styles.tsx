import styled from "@emotion/styled";

const StyledNavSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  transition: outline 150ms;
  outline: 1px solid ${({ theme: { background } }): string => background};
  .search-input {
    border: none;
    background-color: ${({ theme: { background } }): string => background};
    outline: none;
    color: ${({ theme: { textPrimary } }): string => textPrimary};
    width: 100%;
    height: 100%;
    font-size: 12px;
    ::placeholder {
      color: ${({ theme: { textPrimary } }): string => textPrimary};
      transition: color 150ms;
    }
    &:focus::placeholder {
      color: transparent;
    }
    ::selection {
      background-color: ${({ theme: { textPrimary } }): string => textPrimary};
      color: ${({ theme: { background } }): string => background};
    }
  }
  &:hover,
  &:focus-within,
  &:has(.search-input:not(:placeholder-shown)) {
    outline: 1px solid ${({ theme: { stroke } }): string => stroke};
  }
`;

export default StyledNavSearch;
