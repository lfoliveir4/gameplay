import React, { ReactElement } from "react";

import AuthContext from './AuthContext'

interface ContextProps {
  children: JSX.Element | JSX.Element[]
}

export default function AppProvider({ children }: ContextProps): ReactElement {
  return (
      <AuthContext>
        {children}
      </AuthContext>
  )
}
