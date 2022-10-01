import { createContext } from 'react'
import useProvider from "../hooks/useProvider";

const StartContext = createContext()

export function StartProvider(props) {
    const StartProvider = useProvider()
    return (
        <StartContext.Provider value={StartProvider}>{props.children}</StartContext.Provider>
    )
}

export default StartContext;