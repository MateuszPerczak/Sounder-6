import { AnimatePresence } from "framer-motion";

import StyledPage from "./Page.styles";
import type { PageProps } from "./Page.types";

const Page = ({ menu, name, content }: PageProps): JSX.Element => {
  return (
    <StyledPage>
      {menu && (
        <menu className="page-toolbar">
          <span className="toolbar-name">{name}</span>
          <div className="toolbar-content">
            <AnimatePresence initial={false}>{menu}</AnimatePresence>
          </div>
        </menu>
      )}
      <div className="page-content">{content}</div>
      {/* <StyledPageContent
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
      </StyledPageContent> */}
    </StyledPage>
  );
};

export default Page;
