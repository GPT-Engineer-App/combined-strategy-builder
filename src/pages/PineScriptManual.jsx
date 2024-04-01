import React from 'react';
import { Box, Heading, Textarea, Button } from '@chakra-ui/react';

const PineScriptManual = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>PineScript Manual</Heading>
      <Textarea placeholder="Enter PineScript manual content here..." rows={10} mb={4} />
      <Button colorScheme="blue">Save Manual</Button>
    </Box>
  );
};

export default PineScriptManual;