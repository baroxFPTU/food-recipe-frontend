import React from 'react';
import { Avatar, Box, Heading, HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack bg='white' p={4} justifyContent='space-between' border='1px' borderColor='gray.200'>
      <Heading as='h2' size='md'>
        Student Management
      </Heading>
      <Box>
        <Avatar />
      </Box>
    </HStack>
  );
};

export default Header;
