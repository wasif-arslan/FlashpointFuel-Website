import React from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <section className="relative">
      <Box className="h-[100vh] relative">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="w-screen h-screen"
        />
        <Box className="absolute inset-0 bg-black" style={{ opacity: 0.6 }} />
      </Box>
      <Box className="absolute inset-0 flex justify-center items-center  z-2">
        <Box textAlign="center" maxW="container.lg" color="white">
          <Heading className="md:text-6xl text-4xl md:ml-5 md:mr-5 md:-mt-10 font-extrabold text-center mb-4 leading-tight">
            LOWER MAINLAND
          </Heading>
          <Heading className="md:text-6xl text-4xl md:ml-5 md:mr-5 font-extrabold text-center mb-4 leading-tight">
            FUEL DELIVERY
          </Heading>
          <p className="md:text-xl sm:text-md md:ml-5 md:mr-5 text-center md:mt-10 mb-6 leading-relaxed">
            Flashpoint Fuels Ltd provides fuel and lubricant solutions from
            Whistler to Hope. With more than 30 years of industry experience,
            Flashpoint Fuels is your trusted source for fuel delivery; diesel,
            marked and unmarked, home heating oil, tank service and removals,
            lubricants and so much more. We support the Agriculture industry and
            fuel our food supply.
          </p>
          <Flex justifyContent="center" className="gap-4 md:mt-10">
            <Button
              variant="solid"
              className="rounded-full px-10 py-3 text-white bg-red-500 font-semibold z-10"
            >
              Get Quote Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-10 py-3 text-white border  font-semibold z-10"
            >
              Learn More
            </Button>
          </Flex>
        </Box>
      </Box>
    </section>
  );
}
