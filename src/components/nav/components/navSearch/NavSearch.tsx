import { type ChangeEvent, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { debounceTime, fromEvent } from "rxjs";

import Icon from "@/components/icon/Icon";
import useDebounce from "@/hooks/useDeboune/useDebounce";

import StyledNavSearch from "./NavSearch.styles";

const NavSearch = (): JSX.Element => {
  const [_search, setSearch] = useSearchParams();

  const [debouncedSearch, setDebouncedSearch] = useDebounce<string>(200, "");

  useEffect(() => setSearch({ search: debouncedSearch }), [setSearch, debouncedSearch]);

  return (
    <StyledNavSearch>
      <Icon hex="&#xE721;" />
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        spellCheck="false"
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setDebouncedSearch(event.target.value)
        }
      />
    </StyledNavSearch>
  );
};

export default NavSearch;
