import { useContext } from "react";
import StartContext from "../context/startContext";

export default function useStart() {
    return useContext(StartContext)
}

