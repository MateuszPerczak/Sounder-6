import type { ComboBoxOption } from "@/components/comboBox/ComboBox.types";
import type { SettingsStore } from "@/stores/settings/settings.types";

export const themes: ComboBoxOption<SettingsStore["theme"]>[] = [
  {
    name: "Light",
    value: "light",
  },
  {
    name: "Dark",
    value: "dark",
  },
  {
    name: "System",
    value: "system",
  },
];
