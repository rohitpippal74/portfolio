'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force light theme
  React.useEffect(() => {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }, [])

  return (
    <NextThemesProvider 
      {...props} 
      defaultTheme="light" 
      enableSystem={false}
      forcedTheme="light"
    >
      {children}
    </NextThemesProvider>
  )
}
