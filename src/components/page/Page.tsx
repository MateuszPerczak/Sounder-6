import type { PropsWithChildren } from "react";

import StyledPage from "./Page.styles";

const Page = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledPage
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.75,
      }}
    >
      {children}
    </StyledPage>
  );
};

export default Page;
