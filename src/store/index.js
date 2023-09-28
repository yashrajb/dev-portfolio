import React, { useContext } from "react"

export const Context = React.createContext({})

export const useStore = () => {
  const data = useContext(Context)
  return data
}
