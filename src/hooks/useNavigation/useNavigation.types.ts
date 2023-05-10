export type NavigationTemplate = Record<string, NavigationPage>;

export type NavigationPage = {
  default?: true;
  content: JSX.Element;
  menu: JSX.Element;
};

export type NavigationComponents = {
  menu: NavigationPage["menu"];
  content: NavigationPage["content"];
};

export type NavigationPageId = keyof NavigationTemplate;

export type NavigateTo = (navigationPageId: NavigationPageId) => void;

export type UseNavigation = (navigationTemplate: NavigationTemplate) => {
  components: NavigationComponents;
  navigateTo: NavigateTo;
};
