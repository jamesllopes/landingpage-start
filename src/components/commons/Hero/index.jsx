import {
    Flex
} from "@chakra-ui/react";
import "./style.css"

const heroFlex = {
    maxWidth: '100%',
    padding: '3% 10%',
    marginBottom: '2rem'
}

export default function Hero({ children, ...props }) {
    return (
        <Flex
            className="heroFlex"
            align={'center'}
            justify={'space-between'}
            sx={heroFlex}
            {...props}>
            {children}
        </Flex>
    )
}