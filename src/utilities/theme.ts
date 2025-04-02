import { DATA_ATTRIBUTE, DEFAULT_MODE, DEFAULT_THEME, MODE_CLASS, MODES, THEMES, type Mode, type Theme } from "@/constants";

export const getCurrentMode = () =>
  document.documentElement.classList.contains(MODE_CLASS) ? MODES.dark : MODES.light;

export const getCurrentTheme = () => {
  const themeName = document.documentElement.getAttribute(DATA_ATTRIBUTE)!;
  const isValidThemeName =
    Boolean(themeName) && THEMES.map((theme) => theme.name).includes(themeName);

  if (!isValidThemeName) return null;

  return THEMES.find((theme) => theme.name === themeName);
};

export const getNextTheme = () => {
  const currentTheme = getCurrentTheme();

  const currentIndex = THEMES.findIndex(
    (theme) => currentTheme && currentTheme.name === theme.name
  );

  if (currentIndex === -1) {
    const currentMode = getCurrentMode();
    const defaultThemes = getDefaultThemes();

    return defaultThemes[currentMode];
  }

  const nextIndex = (currentIndex + 1) % THEMES.length;
  return THEMES[nextIndex];
};

export const validateMode = (mode: Mode): void => {
  if (![MODES.light, MODES.dark].includes(mode)) throw new Error(`Invalid mode: ${mode}`);
};

export const validateTheme = (theme: Theme['name']): void => {
  if (!THEMES.map((theme) => theme.name).includes(theme))
    throw new Error(`Invalid theme: ${theme}`);
};

export const getDefaultThemes = () => {
  validateMode(DEFAULT_MODE);
  validateTheme(DEFAULT_THEME);

  // @ts-expect-error
  const isDarkMode = DEFAULT_MODE === MODES.dark;

  const otherMode = isDarkMode ? MODES.light : MODES.dark;
  const otherTheme = DEFAULT_THEME.replace(DEFAULT_MODE, otherMode);

  validateMode(otherMode);
  validateTheme(otherTheme);

  const defaultThemes = isDarkMode
    ? {
        light: {
          mode: otherMode,
          name: otherTheme,
        },
        dark: {
          mode: DEFAULT_MODE,
          name: DEFAULT_THEME,
        },
      }
    : {
        light: {
          mode: DEFAULT_MODE,
          name: DEFAULT_THEME,
        },
        dark: {
          mode: otherMode,
          name: otherTheme,
        },
      };

  return defaultThemes;
};