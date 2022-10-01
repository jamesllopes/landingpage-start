import { useState } from "react";

function useProvider() {
    const [team, setTeam] = useState([])
    const [sociais, setSociais] = useState([])
    const [partners, setPartners] = useState([])
    return {
        team,
        setTeam,
        sociais,
        setSociais,
        partners,
        setPartners
    }
}
export default useProvider;