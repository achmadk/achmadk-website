import useLocalStorageState from 'use-local-storage-state'

export function useTheme() {
  const [theme, setTheme, optionalMethods] = useLocalStorageState<'light' | 'dark'>('theme', {
    defaultValue: 'dark'
  })

  const setDarkTheme = (isDarkTheme: boolean) =>
    setTheme(isDarkTheme ? 'dark' : 'light')

  return {
    theme,
    setDarkTheme,
    ...optionalMethods
  }
}
