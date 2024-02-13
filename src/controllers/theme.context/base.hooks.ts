import { useContext } from "react";
import { ThemeContext } from "./Provider";

export function useThemeContext() {
  return useContext(ThemeContext)
}
