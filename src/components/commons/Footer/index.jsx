import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import useStart from "../../../hooks/useStart"
import './style.css'

const footerFlex = {
    backgroundColor: '#74C69D',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2% 10% 2% 10%',
    fontFamily: "'Work Sans', sans-serif",
}

const styleText = {
    color: '#fff',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
}

export default function Footer() {
    const { sociais } = useStart()

    return (
        <Flex
            className="footer"
            height={'90px'}

            sx={footerFlex}>
            <HStack spacing={4}>
                {sociais?.map(item => (
                    <Image key={item.id}
                        src={item.logo}
                        alt={item.name} />))}
            </HStack>
            <Text
                className="styleText"
                fontSize={'1.2rem'}
                sx={styleText}>
                © Start, 2022. All rights reserved.
            </Text>
        </Flex>
    )
}