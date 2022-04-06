import { Heading, Stack } from "@chakra-ui/react";
import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <Stack flex={1} spacing={6}>
      <Heading color="gray.400" fontSize="4xl">
        Products
      </Heading>
      <li>product 1</li>
      <li>product 2</li>
      <li>product 3</li>
    </Stack>
  );
};

export default HomeScreen;
