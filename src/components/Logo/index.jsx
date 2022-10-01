import {
    Box,
    Heading,
    Image
} from "@chakra-ui/react";

const headerHeading = {
    fontSize: '2.3rem',
    color: '#fff',
    fontWeight: '500',
}

export default function Logo() {
    return (
        <Box display="flex" align="center" gap="1rem">
            <Image src="./logo.svg" w="70px" h="48.31px" />
            <Heading sx={headerHeading}>
                Start
            </Heading>
        </Box>
    )
}