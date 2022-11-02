import { Container } from '@chakra-ui/react';
import React from 'react';

const AppContainer = ({ children }) => {
  return (
    <Container display='flex' justifyContent='space-between' maxW='90vw'>
      {children}
    </Container>
  );
};

export default AppContainer;
