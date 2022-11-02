import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ href, label }) => {
  return (
    <Link
      as={NavLink}
      borderRadius={8}
      textDecoration='none'
      to={href}
      _activeLink={{ background: 'teal.400', color: 'white' }}
    >
      <Box
        py={4}
        px={5}
        borderRadius={8}
        fontWeight='medium'
        fontSize='lg'
        _hover={{ background: 'gray.100', color: 'teal.600' }}
      >
        {label}
      </Box>
    </Link>
  );
};

export default NavItem;
