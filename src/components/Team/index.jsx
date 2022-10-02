import { Flex, HStack } from "@chakra-ui/react";
import Card from "../Card";
import useStart from "../../hooks/useStart"
import { ButtonDefault } from "../Button";
import TitleSection from "../TitleSection";

const teamFlex = {
  padding: '2rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem'
}

export default function Team() {
  const { team } = useStart()
  return (
    <Flex sx={teamFlex}>
      <TitleSection
        textTitle={'TEAM'}
        heading={'Our Talents'}
        textInfo={'Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,'} />
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
      <ButtonDefault
        bg={'#212529'}
        color={'#fff'}
        children={'View Team'} />
    </Flex>
  )
}