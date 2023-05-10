import { useEffect, useRef, useState } from "react";

import type {
  NavigateTo,
  NavigationComponents,
  NavigationPageId,
  NavigationTemplate,
  UseNavigation,
} from "./useNavigation.types";

const useNavigation: UseNavigation = (navigationTemplate: NavigationTemplate) => {
  const [currentPageId, setCurrentPageId] = useState<NavigationPageId>();

  const [components, setComponents] = useState<NavigationComponents>({
    menu: <></>,
    content: <></>,
  });

  // useEffect(() => {
  //   //
  // }, []);

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

  return {
    components,
    navigateTo,
  };
};

// export type Template = Record<string, PageProps>;

// export type PageProps = {
//   default?: true;
//   component: () => JSX.Element;
//   menu?: () => JSX.Element;
// };

// export const template: Template = {
//   library: {
//     default: true,
//     component: () => <div>Library</div>,
//   },
//   // search: {},
//   // playlist: {},
//   // updates: {},
//   settings: {
//     component: () => <div>Settings</div>,
//   },
// };

// const [currentPage, setCurrentPage] = useState<NavigationPage>();
// const [currentId, setCurrentId] = useState<keyof NavigationTemplate>();
// useEffect(() => {
//   if (currentId === undefined) return;
//   setCurrentPage(navigationTemplate[currentId]);
// }, [currentId]);
// useEffect(() => {
//   Object.keys(navigationTemplate).forEach((pageNameOrId) => {
//     if (navigationTemplate[pageNameOrId].default) {
//       setCurrentId(pageNameOrId as keyof NavigationTemplate);
//       setCurrentPage(navigationTemplate[pageNameOrId]);
//     }
//   });
// }, []);
// const findDefaultPage = (): void => {
//   Object.keys(navigationTemplate).forEach((pageNameOrId) => {
//     if (navigationTemplate[pageNameOrId].default) {
//       setCurrentId(pageNameOrId as keyof NavigationTemplate);
//       setCurrentPage(navigationTemplate[pageNameOrId]);
//     }
//   });
// };
// useEffect(() => {
//   const defaultPage = Object.entries(navigationTemplate).find(
//     ([_name, page]) => page.default,
//   );
//   if (defaultPage !== undefined) {
//     setCurrentPage(defaultPage[0] as keyof NavigationTemplate);
//   }
//   console.log(defaultPage);
// }, []);
// useEffect(() => {
//   if (currentPage === undefined) return;
//   setContent(navigationTemplate[currentPage].content);
// }, [currentPage]);
// const navigateTo: NavigateTo = (pageNameOrId: keyof NavigationTemplate): void => {
//   if (pageNameOrId === currentId) return;
//   if (!(pageNameOrId in navigationTemplate)) return;
//   setCurrentId(pageNameOrId);
// };
// return {
//   navigateTo,
//   content: currentPage?.content ?? ((): JSX.Element => <></>),
//   menu: () => <div></div>,
//   nav: null,
// };

export default useNavigation;
