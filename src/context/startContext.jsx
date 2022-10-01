import { createContext } from 'react'
import useProvider from "../hooks/useProvider";

const StartContext = createContext()

export function StartProvider(props) {
    const startProvider = useProvider()
    return (
        <StartContext.Provider value={startProvider}>{props.children}</StartContext.Provider>
    )
}

export default StartContext;