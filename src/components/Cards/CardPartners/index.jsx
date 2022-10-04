import { Box, Image } from "@chakra-ui/react"
import useStart from "../../../hooks/useStart"
import { cardsBox } from "../Styles/Card"
import './style.css'


export default function CardPartners() {
    const { partners } = useStart()
    return (
        <Box
            sx={cardsBox}
            className='partnerBox'
        >
            {partners.partner?.map(item => (
                <Image key={item.id} src={item.logo} />
            ))}
        </Box>
    )
}