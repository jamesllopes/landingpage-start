import { Flex } from "@chakra-ui/react";
import Logo from "../../Logo";
import Navbar from "../../Navbar";

const headerFlex = {
    backgroundColor: '#74C69D',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem',
    height: '90px',
    padding: '3% 10% 3% 10%',
    fontFamily: "'Work Sans', sans-serif",
}

export default function Header() {

    return (
        <Flex sx={headerFlex}>
            <Logo />
            <Navbar />
        </Flex>
    )
}
