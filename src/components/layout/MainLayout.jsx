import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <Grid templateRows='70px 1fr' h='100vh' bg='gray.50'>
      <Header />
      <Grid templateColumns='300px 1fr'>
        <Sidebar />
        <Box padding={8}>{children ? children : <Outlet />}</Box>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
