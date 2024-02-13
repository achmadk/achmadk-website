import { createContext, useLayoutEffect, useEffect, type PropsWithChildren } from "react";
import { useTheme } from "..";

export const ThemeContext = createContext<{ theme: 'dark' | 'light'; setDarkTheme: (isDarkTheme: boolean) => void }>({ theme: 'dark', setDarkTheme: () => null })

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const { theme, setDarkTheme } = useTheme()

  const useHook = window !== undefined ? useLayoutEffect : useEffect

  useHook(() => {
    document?.documentElement?.setAttribute(
        "data-theme",
        theme
    );
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme }}>{children}</ThemeContext.Provider>
  )
}
