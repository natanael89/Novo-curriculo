'use client'

import React, { createContext, useContext, useEffect, useState  } from "react"

const ThemeContext = createContext({ isDarkMode: false, toggleDarkMode: () => {}})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children} : { children: React.ReactNode}){
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkMode(darkModeEnabled)
    }, [])

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode)

    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
    )
}