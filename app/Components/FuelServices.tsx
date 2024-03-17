import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function FuelServices() {
  return (
    <section className="md:mt-[500px] mt-[800px] md:ml-10  md:mr-10">
      <Heading className="text-4xl text-red-500 font-extrabold mb-2 leading-tight text-center">
        VANCOUVER
      </Heading>
      <Heading className="text-4xl text-black font-extrabold mb-4 leading-tight text-center">
        AREA FUEL SERVICES
      </Heading>
      <Box fontSize={{ base: "lg", xs:"sm"}}
        maxW={{ base: "90%", md: "80%", lg: "70%" }}
        mx="auto" >
      <Text className="md:text-xl sm:text-md text-black text-center mb-6 leading-relaxed">
        From Hope to Squamish, many homes use oil for their heating purposes,
        something that needs to be refilled every so often. Additionally,
        industrial and commercial machines make use of oil, diesel, or other
        fuel in their work. We offer fuel delivery services, allowing you to
        order more fuel when it is required. During colder months, a lot of
        people use more fuel, so make sure to order before your tank gets too
        low. Flashpoint Fuels Ltd. provides Vancouver area with dedicated fuel
        delivery services.
      </Text></Box>
      <Flex justifyContent="center" className="gap-4 flex-wrap">
        <Button
          colorScheme="red"
          variant="solid"
          className="rounded-full px-6 py-3 bg-red-500 text-white font-semibold"
        >
          Coloured Fuel Account Certification
        </Button>
        <Button
          variant="outline"
          className="rounded-full px-6 py-3 text-red-500 border  border-red-500 font-semibold"
        >
          Farm Tax Exemption Form
        </Button>
      </Flex>
      <div className="mb-5"></div>
    </section>
  );
}
