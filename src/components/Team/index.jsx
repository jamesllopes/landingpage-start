import { Box } from "@chakra-ui/react";
import CardTeams from "../Cards/CardTeams";
import useStart from "../../hooks/useStart"
import './style.css'
import { cardsBox } from "../Cards/Styles/Card";

export default function Team() {
  const { team } = useStart()
  return (
    <Box
      variant='card'
      sx={cardsBox}
      className='teamBox'>
      {team.cards?.map(item => (
        <CardTeams
          key={item.id}
          name={item.name}
          role={item.role}
          avatar={item.avatar} />
      ))}
    </Box>
  )
}