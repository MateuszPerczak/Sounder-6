import { useSearchParams } from "react-router-dom";

import Badge from "@/components/badge/Badge";
import Page from "@/components/page/Page";

const Library = (): JSX.Element => {
  const { 0: params } = useSearchParams();

  const search = params.get("search");

  return (
    <Page
      name="Library"
      toolbar={
        <>
          {search && <Badge hex="&#xE094;" label={`Showing results for "${search}"`} />}
          <Badge hex="&#xE189;" label="84" />
          <Badge hex="&#xE121;" label="2h 30m" />
        </>
      }
      content={<></>}
    />
  );
};

export default Library;
