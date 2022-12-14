import { Flex } from "@chakra-ui/react";
import Logo from "../../Logo";
import Navbar from "../../Navbar";

const headerFlex = {
  backgroundColor: '#74C69D',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem',
  height: '90px',
  padding: '4% 10% 2% 10%',
  fontFamily: "'Work Sans', sans-serif",
}

export default function Header() {

  return (
    <Flex
      backgroundColor={'red'}
      className='header'
      sx={headerFlex}>
      <Logo />
      <Navbar />
    </Flex>
  )
}
