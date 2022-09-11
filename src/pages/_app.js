import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/fragments/Navbar/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
