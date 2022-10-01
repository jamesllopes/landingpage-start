import Header from "../../components/commons/Header"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="main">
        <Header />
      </div>
    </ChakraProvider>
  )
}

export default App
