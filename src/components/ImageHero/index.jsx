import {
    Box,
    Image
} from "@chakra-ui/react";
import "./style.css"

export default function ImageHero({ children }) {
    return (
        <Box className="imageBox">
            <Image src={children} width='90%' />
        </Box>
    )
}