import {
    Flex
} from "@chakra-ui/react";

const welcomeFlex = {
    width: '100%',
    height: '50%',
    padding: '4% 10% 2% 10%',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export default function Hero({ children, ...props }) {
    return (
        <Flex
            sx={welcomeFlex}
            {...props}>
            {children}
        </Flex>
    )
}