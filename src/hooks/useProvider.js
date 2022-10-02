import { useState } from "react";

function useProvider() {
    const [team, setTeam] = useState([])
    const [sociais, setSociais] = useState([])
    const [partners, setPartners] = useState([])
    const [hero, setHero] = useState([])
    return {
        team,
        setTeam,
        sociais,
        setSociais,
        partners,
        setPartners,
        hero,
        setHero
    }
}
export default useProvider;