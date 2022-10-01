import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme'
import './style.css'
import { StartProvider } from './context/startContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StartProvider>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    </ChakraProvider>
  </StartProvider>
)
