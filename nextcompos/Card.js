"use client";

import React, { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Stack,
  Box,
  Flex,
  Center,
  HStack,
  Badge,
  useColorMode,
  defineStyle,
  defineStyleConfig,
  Spacer,
  WrapItem,
  CircularProgress,
  CircularProgressLabel,
  AvatarGroup,
  Avatar,
  Progress,
} from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// Vendors
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

// import "@/styles/globals.css";

const MyCard = () => {
  // const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const data = [
    {
      heading: "Client Report of different new clients arriving",
      badgeText: "Urgent",
      badgeColor: "lightgreen",
      text: "Client Report of different new clients arrivingClient Report of different new clients arriving Client Report of different new clients arrivingClient Report of different new clients arrivingClient Report of different new clients arrivingClient Report of different new clients arriving",
    },
    {
      heading: "Another Example Heading",
      badgeText: "Normal",
      badgeColor: "lightblue",
      text: "This is another example text. You can customize it as needed.",
    },
    {
      heading: "Third Example Heading",
      badgeText: "High Priority",
      // badgeColor: "orange",
      text: "This is the third example text. You can replace it with your content.",
    },
    // Add more data objects as needed
  ];
  const CircularProgressBar = ({ percentage, color, level }) => (
    <div style={{ width: "100px", margin: "10px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${level}%`}
        styles={buildStyles({
          textColor: color,
          pathColor: color,
          trailColor: "#d6d6d6",
        })}
      />
    </div>
  );

  return (
    <>
      <HStack gap={2}>
        <Card maxW={"500px"}>
          <CardHeader>
            <Flex justifyContent={"space-between"}>
              <Heading size="md">Leaves Tracker</Heading>
              <Text color={"purple"} fontSize="sm">
                {" "}
                view all
              </Text>
            </Flex>
          </CardHeader>
          <Flex justify="center" align="center" position="relative">
            <CircularProgress
              value={80}
              color="purple.400"
              size="160px"
              thickness="4px"
              position="relative"
            >
              <CircularProgress
                value={60}
                color="blue.400"
                size="120px"
                thickness="4px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="1"
              >
                <CircularProgressLabel></CircularProgressLabel>
              </CircularProgress>
              <CircularProgress
                value={75}
                color="green.400"
                size="80px"
                thickness="4px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="2"
              >
                <CircularProgressLabel></CircularProgressLabel>
              </CircularProgress>
              <CircularProgressLabel></CircularProgressLabel>
            </CircularProgress>
          </Flex>

          <CardBody>
            <Flex justifyContent={"center"}>
              <HStack>
                <div className={styles.updates}>
                  <span>10</span>
                  <span>/12</span>
                  <p>Emergenyc</p>
                  <p>Updates</p>
                </div>
                <div className={styles.updates}>
                  <span>10</span>
                  <span>/12</span>
                  <p>Casualities</p>
                  <p>riot</p>
                </div>
                <div className={styles.updates}>
                  <span>10</span>
                  <span>/12</span>
                  <p>Dunno is</p>
                  <p>What </p>
                </div>
              </HStack>
            </Flex>
          </CardBody>
        </Card>

        <Card maxW={"500px"} p={2}>
          <Flex justifyContent={"space-between"}>
            <div>
              <CardHeader>
                <Heading size="md">Client Report</Heading>
              </CardHeader>
              <CardBody marginTop={-6}>
                <Stack direction="row" spacing={1} align="center">
                  <Button colorScheme="purple" size="xs" variant="outline">
                    All
                  </Button>
                  <Button colorScheme="blue" size="xs" variant="outline">
                    Urgent
                  </Button>
                  <Button colorScheme="teal" size="xs" variant="outline">
                    Pending
                  </Button>
                </Stack>
              </CardBody>
            </div>

            <Box textAlign={"center"}>
              <span style={{ fontSize: "2.5em", color: "purple" }}>01</span>
              <br />
              <Text color={"grey"} fontSize={"small"}>
                January
              </Text>
              <Text color={"grey"} fontSize={"small"}>
                2023
              </Text>
            </Box>
          </Flex>

          <Card  className={styles.scrolling} height={"100px"}>
            {data.map((item, index) => (
              <CardBody p={0}>
                <CardHeader pb={1.5}>
                  <Flex justifyContent={"space-between"}>
                    <Heading size="sm"> 

                    {item.heading}
                    <Progress bg={"transparent"} colorScheme='purple' size='xs' value={70 } />

                    
                    </Heading>

                    {item.badgeColor && (
                      <Badge
                        borderRadius={"xl"}
                        color={"black"}
                        p={1}
                        bgColor={item.badgeColor}
                      >
                        {item.badgeText}
                      </Badge>
                    )}
                  </Flex>
                </CardHeader>

                <Text pl={5} width={"85%"} fontSize={"smaller"}>
                  {item.text}
                </Text>
              </CardBody>
            ))}
          </Card>
        </Card>
      </HStack>
      <Card mt={3}>
        <CardBody pt={0}>
          <CardHeader pl={0}>
            <Heading fontSize={["lg", "x-large"]}>
              {" "}
              Welcome To Hassana Joiners
            </Heading>
          </CardHeader>
          <AvatarGroup spacing="0.5rem" size="md" max={10}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />

            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />

            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </CardBody>
      </Card>
    </>
  );
};

export default MyCard;
