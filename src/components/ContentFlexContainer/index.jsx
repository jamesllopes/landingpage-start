import { Text, Heading } from "@chakra-ui/react";


const teamTextTitle = {
    textAlign: 'center',
    color: '#74C69D',
    fontSize: '1rem',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '700',
    letterSpacing: '5px',
    paddingTop: '2rem'
}

const teamHeading = {
    textAlign: 'center',
    color: '#212529',
    fontFamily: "'Crimson Text', serif",
    fontWeight: '700',
}

const teamText = {
    textAlign: 'center',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
    paddingBottom: '1.5rem'
}

export default function ContentFlexContainer({ textTitle, heading, textInfo }) {
    return (
        <>
            <Text
                className="teamTextTitle" sx={teamTextTitle}>{textTitle}</Text>
            <Heading
                fontSize={['2rem', '2.5rem', '3rem']}
                sx={teamHeading}>{heading}</Heading>
            <Text
                width={['90%', '70%', '35%']}
                fontSize={['1.5rem', '1.6rem', '2rem']}
                sx={teamText}>{textInfo}</Text>
        </>
    )
}