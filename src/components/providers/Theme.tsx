import { type FC, type PropsWithChildren, useEffect } from 'react'

import { useTheme } from '@/controllers'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme()

  useEffect(() => {
    document?.documentElement?.setAttribute(
      "data-theme",
      theme
    )
  }, [theme])

  return children
}
