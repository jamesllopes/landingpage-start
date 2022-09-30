import { Flex, Heading, Image } from "@chakra-ui/react";

const headerFlex = {
    backgroundColor: '#74C69D',
    alignItems: 'center',
    padding: '0.5rem'
}

export default function Header() {
    return (
        <Flex sx={headerFlex}>
            <Image src="./logo.svg" />
            <Heading fontSize={'1.6rem'}>
                Start
            </Heading>
        </Flex>
    )
}