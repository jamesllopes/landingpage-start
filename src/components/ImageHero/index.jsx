import {
    Box,
    Image
} from "@chakra-ui/react";

export default function ImageHero({ children, ...props }) {
    return (
        <Box>
            <Image src={children} width='90%' />
        </Box>
    )
}