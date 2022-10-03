import {
    Flex,
    Heading,
    Text
} from "@chakra-ui/react";

const contentFlex = {
    flexDirection: 'column',
    gap: '1rem',
}

const styleHeading = {
    fontSize: "1.2rem",
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.3rem'
}

const styleHeadingContent = {
    fontFamily: "'Crimson Text', serif",
    fontWeight: '700'
}

const styleText = {
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
}


export default function ContentHero({ children, welcome, ...props }) {
    return (
        <Flex
            className="contentFlex"
            sx={contentFlex}
            {...props}>
            {welcome && <Heading
                sx={styleHeading}>Welcome</Heading>}

            <Heading
                width={[316, 416, 516]}
                fontSize={['2rem', '2.5rem', '3rem']}
                sx={styleHeadingContent}>{children[0]}
            </Heading>
            <Text
                width={[346, 416, 616]}
                fontSize={'1.2rem'}
                className="styleText"
                sx={styleText}>
                {children[1]}
            </Text>
            {children[2]}

        </Flex >
    )
}