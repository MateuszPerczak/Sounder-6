import { type NavigationTemplate } from "@/hooks/useNavigation/useNavigation.types";

export const navigationTemplate: NavigationTemplate = {
  library: {
    default: true,
    menu: <div>Library</div>,
    content: <div>Library content</div>,
  },
  settings: {
    menu: <div>Settings</div>,
    content: <div>Settings content</div>,
  },
};
