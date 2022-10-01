import { Flex, HStack } from "@chakra-ui/react";
import Card from "../Card";
import useStart from "../../hooks/useStart"

const teamFlex = {
  padding: '2rem'
}

export default function Team() {
  const { team } = useStart()
  return (
    <Flex sx={teamFlex}>
      <HStack spacing={8}>
        {team?.map(item => (
          <Card
            key={item.id}
            name={item.name}
            role={item.role}
            avatar={item.avatar} />
        ))}
      </HStack>
    </Flex>
  )
}