import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import Card from "../Card";
import useStart from '../../hooks/useStart'

const teamFlex = {
    padding: '2rem'
}

export default function Team() {

    const { setTeam } = useStart()


    useEffect(() => {

    }, [])

    return (
        <Flex sx={teamFlex}>
            <Card />
        </Flex>
    )
}