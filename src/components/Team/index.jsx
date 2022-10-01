import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import Card from "../Card";
import useStart from '../../hooks/useStart'

const teamFlex = {
    padding: '2rem'
}

export default function Team() {

    const { setTeam } = useStart()

    const getTeamApi = async () => {
        let response = await fetch(urlApi)
        let moviesData = await response.json()
        moviesTemp = moviesData.results
    }


    useEffect(() => {

    }, [])

    return (
        <Flex sx={teamFlex}>
            <Card />
        </Flex>
    )
}