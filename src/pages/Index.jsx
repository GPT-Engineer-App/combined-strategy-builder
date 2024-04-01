import React, { useState } from "react";
import { Box, Heading, Text, Textarea, Button, useToast, OrderedList, ListItem, Code } from "@chakra-ui/react";

const Index = () => {
  const [strategies, setStrategies] = useState([]);
  const [combinedStrategy, setCombinedStrategy] = useState("");
  const toast = useToast();

  const handleSubmitStrategy = () => {
    const strategyInput = document.getElementById("strategyInput").value;
    if (strategyInput.trim() !== "") {
      setStrategies([...strategies, strategyInput]);
      document.getElementById("strategyInput").value = "";
      toast({
        title: "Strategy added",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleOptimizeStrategies = () => {
    // TODO: Implement actual strategy optimization using AI/ML
    // For demo purposes, just concatenate the strategies
    const combined = strategies.join("\n\n");
    setCombinedStrategy(combined);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding="20px">
      <Heading as="h1" size="xl" marginBottom="20px">
        TradingView Strategy Optimizer
      </Heading>

      <Text fontSize="xl" marginBottom="10px">
        Enter TradingView strategies (PineScript):
      </Text>
      <Textarea id="strategyInput" rows={10} marginBottom="10px" />
      <Button colorScheme="blue" onClick={handleSubmitStrategy}>
        Add Strategy
      </Button>

      <OrderedList marginTop="20px">
        {strategies.map((strategy, index) => (
          <ListItem key={index}>
            <Code>{strategy}</Code>
          </ListItem>
        ))}
      </OrderedList>

      {strategies.length > 1 && (
        <Button colorScheme="green" marginTop="20px" onClick={handleOptimizeStrategies}>
          Optimize Strategies
        </Button>
      )}

      {combinedStrategy && (
        <Box marginTop="20px">
          <Heading as="h2" size="lg" marginBottom="10px">
            Optimized Combined Strategy
          </Heading>
          <Code display="block" whiteSpace="pre">
            {combinedStrategy}
          </Code>
        </Box>
      )}
    </Box>
  );
};

export default Index;
