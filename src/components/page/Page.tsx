import { AnimatePresence } from "framer-motion";

import StyledPage, { StyledPageContent } from "./Page.styles";
import type { PageProps } from "./Page.types";

const Page = ({ toolbar, name, content }: PageProps): JSX.Element => {
  return (
    <StyledPage>
      {toolbar && (
        <menu className="page-toolbar">
          <span className="toolbar-name">{name}</span>
          <div className="toolbar-content">
            <AnimatePresence initial={false}>{toolbar}</AnimatePresence>
          </div>
        </menu>
      )}
      <StyledPageContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          mass: 0.05,
          stiffness: 100,
          damping: 5,
        }}
      >
        {content}
      </StyledPageContent>
    </StyledPage>
  );
};

export default Page;
