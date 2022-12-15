import React, { createContext, useState } from 'react'

export type AuthContextData = {
  isLoggedIn: boolean
  isLoading: boolean
  signIn(): Promise<void>
  signOut(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: React.ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async () => {
    setIsLoading(true)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    }).then(() => {
      setIsLoggedIn(true)
      setIsLoading(false)
    })
  }

  const signOut = async () => {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
