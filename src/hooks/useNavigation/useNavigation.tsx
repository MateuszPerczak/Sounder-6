import { useEffect, useState } from "react";

import {
  type NavigateTo,
  type NavigationComponents,
  type NavigationPageId,
  type NavigationTemplate,
  type UseNavigation,
} from "./useNavigation.types";

const useNavigation: UseNavigation = (navigationTemplate: NavigationTemplate) => {
  const [currentPageId, setCurrentPageId] = useState<NavigationPageId>("");
  const [components, setComponents] = useState<NavigationComponents>({
    menu: <></>,
    content: <></>,
  });

  const navigateTo: NavigateTo = (navigationPageId: NavigationPageId) => {
    if (navigationPageId === currentPageId) return;
    if (!(navigationPageId in navigationTemplate)) return;
    setCurrentPageId(navigationPageId);
    const { menu, content } = navigationTemplate[navigationPageId];
    setComponents({
      menu,
      content,
    });
  };

  useEffect(() => {
    navigateTo(
      Object.keys(navigationTemplate)
        .filter(
          (navigationPageId: NavigationPageId) =>
            navigationTemplate[navigationPageId]["default"],
        )
        .at(0) ?? "",
    );
  }, []);

  return {
    components,
    navigateTo,
    currentPageId,
  };
};

export default useNavigation;
