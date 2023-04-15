import { ChakraProvider, theme } from '@chakra-ui/react'
import Ambulance from './ambulance.jsx';


function Design() {
  return (
    <div>
       <ChakraProvider theme={theme}>
      <Ambulance/> 
    </ChakraProvider>
    </div>
  );
}

export default Design;
