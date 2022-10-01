import { useState } from "react";

function useProvider() {
    const [team, setTeam] = useState([])
    return {
        team,
        setTeam
    }
}
export default useProvider;