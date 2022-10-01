import { Flex, Text, HStack, Heading, Button } from "@chakra-ui/react";
import Card from "../Card";
import useStart from "../../hooks/useStart"
import DefaultButton from "../Button";

const teamFlex = {
  padding: '2rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem'
}

const teamTextTitle = {
  color: '#74C69D',
  fontSize: '1rem',
  fontFamily: "'Work Sans', sans-serif",
  fontWeight: '700',
  letterSpacing: '5px'
}

const teamHeading = {
  color: '#212529',
  fontSize: '2.5rem',
  fontFamily: "'Crimson Text', serif",
  fontWeight: '700',
}

const teamText = {
  width: '35%',
  textAlign: 'center',
  fontSize: '1.8rem',
  fontFamily: "'Work Sans', sans-serif",
  fontWeight: '400',
  paddingBottom: '1.5rem'
}

export default function Team() {
  const { team } = useStart()
  return (
    <Flex sx={teamFlex}>
      <Text sx={teamTextTitle}>TEAM</Text>
      <Heading sx={teamHeading}>Our Talents</Heading>
      <Text sx={teamText}>Lorem ipsum, dolor sit amet consectetur
        Suscipit nemo hic quos, ab,</Text>
      <HStack spacing={20}
        paddingBottom='2rem'>
        {team?.map(item => (
          <Card
            key={item.id}
            name={item.name}
            role={item.role}
            avatar={item.avatar} />
        ))}
      </HStack>
      <DefaultButton
        bg={'#212529'}
        color={'#fff'}
        content={'View Team'} />
    </Flex>
  )
}