import { useCallback, useEffect, useReducer, useState } from "react";

import type {
  NavigateToProps,
  UseNavigationActions,
  UseNavigationState,
} from "./useNavigation.types";

const useNavigation = (): void => {
  //

  const navigateTo = (): void => {
    //
  };

  const reducer = (
    state: UseNavigationState,
    action: UseNavigationActions,
  ): UseNavigationState => {
    return state;
  };

  const [state, dispatch] = useReducer(reducer, { currentPageId: "library" });

  dispatch({ type: "navigateTo", pageId: "playlist", playlistId: "123" });
};

export default useNavigation;

// const [currentPageId, setCurrentPageId] = useState<NavigationPageId>("");
// const [components, setComponents] = useState<NavigationComponents>({
//   menu: <></>,
//   content: <></>,
// });
// const navigateTo: NavigateTo = useCallback(
//   (navigationPageId: NavigationPageId) => {
//     if (navigationPageId === currentPageId) return;
//     if (!(navigationPageId in navigationTemplate)) return;
//     setCurrentPageId(navigationPageId);
//     const { menu, content } = navigationTemplate[navigationPageId];
//     setComponents({
//       menu,
//       content,
//     });
//   },
//   [currentPageId],
// );
// useEffect(() => {
//   navigateTo(
//     Object.keys(navigationTemplate)
//       .filter(
//         (navigationPageId: NavigationPageId) =>
//           navigationTemplate[navigationPageId]["default"],
//       )
//       .at(0) ?? "",
//   );
//   // disabled dependency array due to one time execution purpose
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
// return {
//   components,
//   navigateTo,
//   currentPageId,
// };
