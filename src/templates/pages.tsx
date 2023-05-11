import { type NavigationTemplate } from "@/hooks/useNavigation/useNavigation.types";

import Library from "../pages/library/Library";
import Playlist from "../pages/playlist/Playlist";
import Settings from "../pages/settings/Settings";

export const navigationTemplate: NavigationTemplate = {
  library: {
    default: true,
    label: "Library",
    menu: <div>Library</div>,
    content: <Library />,
  },
  settings: {
    label: "Settings",
    menu: <div>Settings</div>,
    content: <Settings />,
  },
  favorites: {
    label: "Favorites",
    menu: <div>Favorites</div>,
    content: <Playlist playlistId="favorites" />,
  },
  updates: {
    label: "Updates",
    menu: <div>Updates</div>,
    content: <div>Updates content</div>,
  },
};
