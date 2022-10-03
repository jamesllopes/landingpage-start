import { Box, Image } from "@chakra-ui/react"
import useStart from "../../../hooks/useStart"
import './style.css'

const partnerBox = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6rem',
    paddingBottom: '2rem'
}

export default function CardPartners() {
    const { partners } = useStart()
    return (
        <Box
            sx={partnerBox}
            className='partnerBox'
        >
            {partners.partner?.map(item => (
                <Image key={item.id} src={item.logo} />
            ))}
        </Box>
    )
}