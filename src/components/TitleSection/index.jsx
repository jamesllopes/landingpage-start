import { Flex, Text, Heading } from "@chakra-ui/react";

const teamTextTitle = {
    color: '#74C69D',
    fontSize: '1rem',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '700',
    letterSpacing: '5px',
    paddingTop: '2rem'
}

const teamHeading = {
    color: '#212529',
    fontSize: '2.5rem',
    fontFamily: "'Crimson Text', serif",
    fontWeight: '700',
}

const teamText = {
    width: '35%',
    textAlign: 'center',
    fontSize: '1.8rem',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
    paddingBottom: '1.5rem'
}

export default function TitleSection({ textTitle, heading, textInfo }) {
    return (
        <>
            <Text sx={teamTextTitle}>{textTitle}</Text>
            <Heading sx={teamHeading}>{heading}</Heading>
            <Text sx={teamText}>{textInfo}</Text>
        </>
    )
}