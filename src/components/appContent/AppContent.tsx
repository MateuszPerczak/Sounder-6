import { AnimatePresence } from "framer-motion";

import { useNavigation } from "@/hooks";
import { navigationTemplate } from "@/pages/pages";

import Nav from "../nav/Nav";

const AppContent = (): JSX.Element => {
  const {
    components: { content, menu },
    navigateTo,
  } = useNavigation(navigationTemplate);

  return (
    <>
      <Nav navigateTo={navigateTo} />
      <AnimatePresence mode="wait">{content}</AnimatePresence>
    </>
  );
};

export default AppContent;
