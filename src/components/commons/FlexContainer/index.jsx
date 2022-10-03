import { Flex } from "@chakra-ui/react";
import './style.css'

const partnerFlex = {
    padding: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
}

export default function ComponentSemNome({ children, ...props }) {
    return (
        <Flex sx={partnerFlex}>
            {children}
        </Flex>
    )
}