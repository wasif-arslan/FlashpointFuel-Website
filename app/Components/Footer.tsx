import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer color="white" className="py-10">
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Box flexBasis={{ base: "100%", md: "30%" }} className="mt-5">
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            mb={4}
            textAlign="center"
            className="font-bold"
          >
            Get In Touch
          </Heading>
          <div className="ml-5">
            <Flex alignItems="flex-start" mb={2} flexDirection="row">
              <FaPhone style={{ marginRight: "0.5rem", color: "red" }} />
              <Text>604-435-3646</Text>
            </Flex>
            <Flex alignItems="flex-start" mb={2} flexDirection="row">
              <FaEnvelope style={{ marginRight: "0.5rem", color: "red" }} />
              <Text>dany@flashpointfuels.com</Text>
            </Flex>
            <Flex alignItems="flex-start" flexDirection="row">
              <FaMapMarkerAlt style={{ marginRight: "0.5rem", color: "red" }} />
              <Text>#104 – 3A Burbidge St Coquitlam V3K 7B2</Text>
            </Flex>
          </div>
        </Box>

        <Box flexBasis={{ base: "100%", md: "30%" }} className="mt-5">
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            mb={4}
            textAlign="center"
            className="font-bold"
          >
            Professional Affiliations
          </Heading>
          <div className="ml-5">
            <Text mb={2}>Transportation of Dangerous Goods Training</Text>
            <Text mb={2}>
              Canada’s Professional Petroleum Institute Training
            </Text>
            <Text mb={2}>Emergency Response training</Text>
            <Text mb={2}>Worksafe BC Compliant</Text>
          </div>
        </Box>

        <Box flexBasis={{ base: "100%", md: "30%" }} className="mt-5">
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            mb={4}
            textAlign="center"
            className="font-bold"
          >
            Follow Us
          </Heading>
          <div className="flex ml-5 justify-center items-center">
            <Link href="#">
              <FaFacebook
                style={{ marginRight: "0.5rem", color: "black" }}
                className=" h-7 w-7"
              />
            </Link>
            <Link href="#">
              <FaTwitter
                style={{ marginRight: "0.5rem", color: "black" }}
                className=" h-7 w-7"
              />
            </Link>
            <Link href="#">
              <FaInstagram
                style={{ marginRight: "0.5rem", color: "black" }}
                className=" h-7 w-7"
              />
            </Link>
            <Link href="#">
              <FaYoutube
                style={{ marginRight: "0.5rem", color: "black" }}
                className=" h-7 w-7"
              />
            </Link>
          </div>
        </Box>
      </Flex>
      <h1 className="bg-red-500 w-full mt-5 h-0.5" />
      <Text mt={4} className="text-center">
        © 2022 Flashpoint Fuels Ltd. Developed by{" "}
        <Link href="https://github.com/wasif-arslan" className="text-red-500">
          Wasif
        </Link>
      </Text>
    </footer>
  );
}
