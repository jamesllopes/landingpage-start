import { Box } from "@chakra-ui/react";
import CardTeams from "../Cards/CardTeams";
import useStart from "../../hooks/useStart"
import './style.css'


const teamBox = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6rem',
  paddingBottom: '2rem'
}

export default function Team() {
  const { team } = useStart()
  return (
    <Box
      sx={teamBox}
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