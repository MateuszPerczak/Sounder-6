import type { PropsWithChildren } from "react";

import StyledPage from "./Page.styles";

const Page = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
    >
      {children}
    </StyledPage>
  );
};

export default Page;
