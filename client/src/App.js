
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div>
      <Header />
      <div className='main'>
      <Sidebar />
      <Landing />
      </div>
    </div>
    </ChakraProvider>
  );
}

export default App;
