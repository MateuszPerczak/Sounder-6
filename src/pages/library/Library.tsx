import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Icon from "@/components/icon/Icon";
import Page from "@/components/page/Page";

const Library = (): JSX.Element => {
  const { 0: search } = useSearchParams();

  const word = search.get("search");

  return (
    <Page
      name="Library"
      toolbar={
        <>
          {word && <Badge hex="&#xE094;" label={`Showing results for "${word}"`} />}
          <Badge hex="&#xE189;" label="84" />
          <Badge hex="&#xE121;" label="2h 30m" />
        </>
      }
      content={<></>}
    />
  );
};

export default Library;
