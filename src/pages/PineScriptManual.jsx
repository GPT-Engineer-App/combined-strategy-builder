import React, { useState } from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";

const PineScriptManual = () => {
  const [manualContent, setManualContent] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setManualContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleProcessManual = () => {
    console.log("Processing manual content:", manualContent);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        PineScript Manual
      </Heading>
      <Input type="file" accept=".txt" onChange={handleFileUpload} mb={4} />
      <Button colorScheme="blue" onClick={handleProcessManual}>
        Process Manual
      </Button>
    </Box>
  );
};

export default PineScriptManual;
