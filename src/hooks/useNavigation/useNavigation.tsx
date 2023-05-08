import { useEffect, useRef, useState } from "react";

const useNavigation: UseNavigation = (navigationTemplate: NavigationTemplate) => {
  const [currentPage, setCurrentPage] = useState<NavigationPage>();
  const [currentId, setCurrentId] = useState<keyof NavigationTemplate>();

  useEffect(() => {
    if (currentId === undefined) return;
    setCurrentPage(navigationTemplate[currentId]);
  }, [currentId]);

  useEffect(() => {
    Object.keys(navigationTemplate).forEach((pageNameOrId) => {
      if (navigationTemplate[pageNameOrId].default) {
        setCurrentId(pageNameOrId as keyof NavigationTemplate);
        setCurrentPage(navigationTemplate[pageNameOrId]);
      }
    });
  }, []);

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

  const navigateTo: NavigateTo = (pageNameOrId: keyof NavigationTemplate): void => {
    if (pageNameOrId === currentId) return;
    if (!(pageNameOrId in navigationTemplate)) return;
    setCurrentId(pageNameOrId);
  };

  return {
    navigateTo,
    content: currentPage?.content ?? ((): JSX.Element => <></>),
    menu: () => <div></div>,
    nav: null,
  };
};

export type UseNavigation = (navigationTemplate: NavigationTemplate) => {
  menu: NavigationPage["menu"];
  content: NavigationPage["content"];
  nav: null;
  navigateTo: NavigateTo;
};

type NavigateTo = (pageNameOrId: keyof NavigationTemplate) => void;

type NavigationTemplate = Record<string, NavigationPage>;

type NavigationPage = {
  default?: true;
  menu: () => JSX.Element;
  content: () => JSX.Element;
};

export const navItems: NavigationTemplate = {
  library: {
    default: true,
    menu: () => <div>Test</div>,
    content: () => <div>dsds</div>,
  },
  settings: {
    content: () => <div>Settings</div>,
    menu: () => <div>Library</div>,
  },
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

export default useNavigation;
