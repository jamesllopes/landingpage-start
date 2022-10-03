import {
    Flex,
    Heading,
    Text
} from "@chakra-ui/react";

const contentFlex = {
    flexDirection: 'column',
    gap: '0.7rem'
}

const styleHeading = {
    fontSize: "1.2rem",
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.3rem'
}

const textContentFlex = {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '416px',
    gap: '1rem',
}

const styleHeadingContent = {
    fontSize: '2.5rem',
    fontFamily: "'Crimson Text', serif",
    fontWeight: '700'
}

const styleText = {
    fontSize: '1rem',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
}


export default function ContentHero({ children, welcome, ...props }) {
    console.log(welcome)
    return (
        <Flex sx={contentFlex}
            {...props}>
            {welcome && <Heading sx={styleHeading}>Welcome</Heading>}
            <Flex
                sx={textContentFlex}>
                <Heading
                    sx={styleHeadingContent}>{children[0]}
                </Heading>
                <Text sx={styleText}>
                    {children[1]}
                </Text>
                {children[2]}
            </Flex>
        </Flex >
    )
}