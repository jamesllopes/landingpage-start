import { Box, Image } from "@chakra-ui/react";
import welcome from '../../assets/Illustrations/welcome.png'

export default function Illustration() {
    return (
        <Box>
            <Image src={welcome} width='100%' />
        </Box>
    )
}