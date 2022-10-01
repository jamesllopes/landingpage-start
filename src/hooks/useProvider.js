import { useState } from "react";

function useProvider() {
    const [team, setTeam] = useState([])
    const [sociais, setSociais] = useState([])
    return {
        team,
        setTeam,
        sociais,
        setSociais
    }
}
export default useProvider;