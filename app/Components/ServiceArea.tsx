import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function ServiceArea() {
  return (
    <Box
      bg="red.500"
      color="white"
      textAlign="center"
      py={10}
      mt={10}
      width="full"
    >
      <Heading as="h2" fontSize={{ base: "3xl"}} mb={4} className="font-bold">
        Service Area
      </Heading>
      <Heading  as="h2"
        fontSize={{ base: "lg" }}
        maxW={{ base: "90%", md: "80%", lg: "70%" }}
        mx="auto"  >
        The entire Lower Mainland from Vancouver all the way up to Whistler,
        from Richmond all the way east to Hope, and from the USA border to the
        North shore.
      </Heading>
    </Box>
  );
}
