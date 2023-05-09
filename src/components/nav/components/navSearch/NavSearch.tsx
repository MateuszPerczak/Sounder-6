import Icon from "@/components/icon/Icon";

import StyledNavSearch from "./NavSearch.styles";

const NavSearch = (): JSX.Element => {
  return (
    <StyledNavSearch>
      <Icon hex="&#xE721;" />
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        spellCheck="false"
      />
    </StyledNavSearch>
  );
};

export default NavSearch;
