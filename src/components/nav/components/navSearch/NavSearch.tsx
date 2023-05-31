import { type ChangeEvent, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import Icon from "@/components/icon/Icon";
import { useDebounce } from "@/hooks";

import StyledNavSearch from "./NavSearch.styles";

const NavSearch = (): JSX.Element => {
  const { 1: setSearch } = useSearchParams();
  const [debouncedSearch, setDebouncedSearch] = useDebounce<string>(200, "");

  // just update the search param when the debounced search value changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => setSearch({ search: debouncedSearch }), [debouncedSearch]);

  return (
    <StyledNavSearch>
      <Icon hex="&#xE721;" />
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        spellCheck="false"
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void =>
          setDebouncedSearch(value.trim().substring(0, 64).normalize())
        }
      />
    </StyledNavSearch>
  );
};

export default NavSearch;
