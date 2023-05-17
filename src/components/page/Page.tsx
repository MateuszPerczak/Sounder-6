import type { PropsWithChildren } from "react";

import StyledPage from "./Page.styles";

const Page = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledPage
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        mass: 0.1,
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
