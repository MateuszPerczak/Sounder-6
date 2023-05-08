import { useNavigation } from "@/hooks";
import { navItems } from "@/hooks/useNavigation/useNavigation";

import Nav from "../nav/Nav";

const AppContent = (): JSX.Element => {
  const { content: Content, menu } = useNavigation(navItems);

  return (
    <>
      <Nav />
      <Content />
    </>
  );
};

export default AppContent;
