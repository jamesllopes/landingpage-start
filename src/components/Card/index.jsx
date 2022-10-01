import { HStack, Box, Text, Image, Heading, Flex, color } from "@chakra-ui/react";
import testeImage from '../../assets/avatar/pegLegge.png'

const cardBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    width: '240px',
    height: '290px',
    boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.28)',
    gap: '1rem'
}

const cardFlex = {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.5rem'
}

const cardHeading = {
    fontSize: '1.5rem',
    fontFamily: "'Crimson Text', serif",
    fontWeight: '700',
    color: '#212529'
}

const cardText = {
    fontSize: '1rem',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
    color: '#212529BF'
}

export default function Card() {
    return (
        <HStack>
            <Box sx={cardBox}>
                <Image src={testeImage} width="90%" alt="Avatar" />
                <Flex sx={cardFlex}>
                    <Heading sx={cardHeading}>Peg Legge</Heading>
                    <Text sx={cardText}>CEO</Text>
                </Flex>
            </Box>
        </HStack>
    )
}