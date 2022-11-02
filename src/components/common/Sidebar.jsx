import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import NavItem from './NavItem';

const Sidebar = () => {
  return (
    <Box h='full' bg='white' borderRight='1px' borderColor='gray.200'>
      <Flex direction='column' w='100%' p={3} gap={3}>
        <NavItem href='/admin/dashboard' label='Dashboard' />
        <NavItem href='/admin/students' label='Students' />
      </Flex>
    </Box>
  );
};

export default Sidebar;
