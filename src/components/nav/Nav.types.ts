import {
  type NavigateTo,
  type NavigationPageId,
} from "@/hooks/useNavigation/useNavigation.types";

export interface NavProps {
  navigateTo: NavigateTo;
  currentPageId: NavigationPageId;
}
