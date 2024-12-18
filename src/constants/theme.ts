export const DATA_ATTRIBUTE = 'data-theme'
export const DEFAULT_MODE = 'light'
export const DEFAULT_THEME = 'light'

export const LOCAL_STORAGE_KEY = 'theme'

export const MODE_CLASS = 'dark'

export const THEME_META_TAG_SELECTOR = 'meta[name="theme-color"]'

export const MODES = Object.freeze({
  dark: 'dark',
  light: 'light'
})

export type Mode = keyof typeof MODES

export const THEMES = Object.freeze([
  {
    mode: MODES.light,
    name: 'light'
  },
  {
    mode: MODES.dark,
    name: 'dark'
  }
])

export type Theme = typeof THEMES[0]

export const defaultThemes = {
  light: THEMES[0],
  dark: THEMES[1]
}
