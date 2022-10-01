import { Flex, Heading } from "@chakra-ui/react";
import Illustration from '../Illustration'
import TextContent from "../TextContent";

const welcomeFlex = {
    backgroundColor: '#74C69D',
    width: '100%',
    height: '50%',
    padding: '0 10% 0 10%',
    alignItems: 'center',
    justifyContent: 'space-between'
}

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

export default function Welcome() {
    return (
        <Flex sx={welcomeFlex}>
            <Flex sx={contentFlex}>
                <Heading sx={styleHeading}>Welcome</Heading>
                <TextContent
                    color={'#fff'} />
            </Flex>
            <Illustration />
        </Flex>
    )
}