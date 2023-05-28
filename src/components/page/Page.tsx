import type { PropsWithChildren } from "react";

import StyledPage from "./Page.styles";
import type { PageProps } from "./Page.types";

const Page = ({ children }: PropsWithChildren<PageProps>): JSX.Element => {
  return (
    <StyledPage
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // initial={{ opacity: 0, scale: 0.9 }}
      // animate={{ opacity: 1, scale: 1 }}
      // exit={{ opacity: 0, scale: 1.1 }}
      transition={{
        type: "spring",
        mass: 0.05,
        stiffness: 100,
        damping: 5,
      }}
      layoutScroll
    >
      {children}
    </StyledPage>
  );
};

export default Page;
