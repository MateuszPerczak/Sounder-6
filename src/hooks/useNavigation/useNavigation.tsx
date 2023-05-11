import { useCallback, useEffect, useState } from "react";

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

  const navigateTo: NavigateTo = useCallback(
    (navigationPageId: NavigationPageId) => {
      if (navigationPageId === currentPageId) return;
      if (!(navigationPageId in navigationTemplate)) return;
      setCurrentPageId(navigationPageId);
      const { menu, content } = navigationTemplate[navigationPageId];
      setComponents({
        menu,
        content,
      });
    },
    [currentPageId],
  );

  useEffect(() => {
    navigateTo(
      Object.keys(navigationTemplate)
        .filter(
          (navigationPageId: NavigationPageId) =>
            navigationTemplate[navigationPageId]["default"],
        )
        .at(0) ?? "",
    );
    // disabled dependency array due to one time execution purpose
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    components,
    navigateTo,
    currentPageId,
  };
};

export default useNavigation;
