import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main'
import { ChakraProvider } from '@chakra-ui/react'
import './style.css'
import { StartProvider } from './context/startContext'
// import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StartProvider>
    <React.StrictMode>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </React.StrictMode>
  </StartProvider>
)
