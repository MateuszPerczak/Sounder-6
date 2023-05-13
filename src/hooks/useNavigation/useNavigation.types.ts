import type { LibraryProps } from "@/pages/Library.types";
import type { PlaylistProps } from "@/pages/playlist/Playlist.types";

export type PageToProps = {
  library: LibraryProps;
  playlist: PlaylistProps;
};

export type UseNavigationActions = NavigateToAction | UpdatePageAction;

export type NavigateToAction = {
  type: "navigateTo";
} & (NavigateToLibrary | NavigateToPlaylist);

type NavigateToLibrary = {
  pageId: "library";
} & LibraryProps;

type NavigateToPlaylist = {
  pageId: "playlist";
} & PlaylistProps;

// export type NavigateToAction = {
//   type: "navigateTo";
//   pageId: keyof PageToProps;
// };
export type UpdatePageAction = {
  type: "updatePage";
};

export type UseNavigationState = {
  currentPageId: keyof PageToProps;
};

// import type { FC } from "react";

// export type NavigationTemplate = Record<string, NavigationPage>;

// export type NavigationPage = {
//   default?: true;
//   content: FC<unknown>;
//   menu: FC;
//   label: string;
// };

// export type NavigationComponents = {
//   menu: NavigationPage["menu"];
//   content: NavigationPage["content"];
// };

// export type NavigationPageId = keyof NavigationTemplate;

// export type NavigateTo = (navigationPageId: NavigationPageId) => void;

// export type UseNavigation = (navigationTemplate: NavigationTemplate) => {
//   components: NavigationComponents;
//   navigateTo: NavigateTo;
//   currentPageId: NavigationPageId;
// };
