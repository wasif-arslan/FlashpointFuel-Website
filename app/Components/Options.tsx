import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

export default function TwoImagesComponent() {
  return (
    <section className="md:mt-20 sm:mt-10 md:ml-10 md:mr-10">
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap={8}>
        <Box
          borderWidth="1px"
          overflow="hidden"
          position="relative"
          boxShadow="md"
        >
          <Box
            h="100%"
            w="100%"
            bg="gray.200"
            bgSize="cover"
            bgPosition="center"
          >
            <Image src="/fuel2.jpg" width={500} height={500} alt="Image 1" />
          </Box>
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={6}
            className=" md:gap-4"
          >
            <Heading className="sm:text-lg md:text-2xl -2 md:mt-2 font-bold">
              REQUEST A DELIVERY QUOTE
            </Heading>
            <Text className="md:text-lg sm:text-xs mt-2 md:mt-3">
              We are a locally-owned company that knows the value of good
              customer service. When you call us, you talk directly to the
              owner. Our dedication to excellent service and high-quality
              service principles gives us an advantage in the industry. We have
              emergency response training and are certified to transport
              dangerous goods. Give us a call today to request a quote or
              inquire about pricing on our products
            </Text>

            <Button
              colorScheme="blue"
              className="rounded-full bg-red-500 md:mt-2 md:p-3 mt-1 p-2 mb-2 md:pr-10 md:pl-10 pr-7 pl-7   w-fit"
            >
              Call Us Today
            </Button>
          </Box>
        </Box>

        <Box
          borderWidth="1px"
          overflow="hidden"
          position="relative"
          boxShadow="md"
        >
          <Box
            h="100%"
            w="100%"
            bg="gray.200"
            bgSize="cover"
            bgPosition="center"
          >
            <Image src="/fuel1.jpg" width={500} height={500} alt="Image 2" />
          </Box>
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            className="gap-2 md:gap-4"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={6}
          >
            <Heading className="sm:text-xl md:text-2xl font-bold">
              CERTIFIED FUEL TANK INSPECTIONS
            </Heading>
            <Text className="md:text-lg sm:text-xs mt-2">
              Did you know that your fuel tank should be inspected yearly?
              Flashpoint Fuels provides fuel tank inspection services to detect
              wear and tear and leaks. If your tank is found to be damaged, then
              we will perform a removal and replacement, making sure to pump all
              your fuel from the old tank into the new one. Contact us today to
              schedule your inspection.
            </Text>

            <Button
              colorScheme="blue"
              className="rounded-full bg-red-500 p-3 pr-10 mt-2 pl-10 w-fit"
            >
              Book an Inspection
            </Button>
          </Box>
        </Box>
      </Flex>
    </section>
  );
}
