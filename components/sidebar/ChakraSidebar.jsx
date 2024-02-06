import {
  Avatar,
  Heading,
  Image,
  Input,
  Stack,
  Wrap,
  WrapItem,
  Button,
  ButtonGroup,
  Divider,
  Text,
  Flex,
  VStack,
  StackDivider,
  HStack,
  Icon,
  Center,
  Box,
} from "@chakra-ui/react";
import { RiDoubleQuotesR,RiHome5Line } from "react-icons/ri";
import React, { useState } from "react";
import {
  RiArrowDropDownLine,
  RiDashboard2Line,
  RiThreadsLine,
} from "react-icons/ri";
import { ArrowBackIcon } from "@chakra-ui/icons";
import SideTop from "./SideTop";

const ChakraSidebar = () => {
  const [open, setOpen] = useState(true);
  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <section id="section">
      <div style={{ position: "relative" }} id="side-stack">
        <div
          id="side-bar"
          style={{
            width: open ? "230px" : "100px", 
            transition: "width 0.5s ease", 
            overflowX: "hidden", 
          }}
        >
          <Wrap position={"relative"} p={2}>
            <WrapItem alignItems={"center"} gap={5}>
              <Avatar size={["sm", "md", "lg"]} src="" alt="" />
              {open && (
                <Heading fontSize={["sm", "medium", "larger"]} mt={2}>
                  Haider Ali
                </Heading>
              )}
            </WrapItem>
            <Icon
              onClick={handleToggleSidebar}
              position={"absolute"}
              top={2}
              right={0}
              boxSize={6}
            >
              <ArrowBackIcon />
            </Icon>
          </Wrap>
          <Box p={2}>
            {open && (
              <Input mt={3} size={["sm", "md"]} placeholder="Search Anything" />
            )}
          </Box>
          <Stack
            alignItems={"flex-start"}
            pl="2"
            rounded="md"
            bg="transparent"
            mt={4}
            spacing={1}
          >
            <SideTop
              icon={<RiDashboard2Line size={"30px"} />}
              name={open && "Dashboard"}
            />
            <SideTop
              icon={<RiHome5Line size={"30px"} />}
              name={open && "Home"}
            />
            <SideTop
              icon={<RiDashboard2Line size={"30px"} />}
              name={open && "About"}
            />
            <SideTop
              icon={<RiDashboard2Line size={"30px"} />}
              name={open && "Contact"}
            />
            <SideTop
              icon={<RiDashboard2Line size={"30px"} />}
              name={open && "Stats"}
            />
          </Stack>
          <Divider w={"70%"} m={6}></Divider>
          <Stack id="side-bottom">
            <Wrap>
              <WrapItem pl="2">
                <Button
                  leftIcon={<RiDashboard2Line size={"30px"} />}
                  size={"md"}
                  colorScheme="teal"
                  variant="ghost"
                >
                  {open && "Dashboard"}
                </Button>
              </WrapItem>
            </Wrap>
            <Wrap mt={2}>
              <WrapItem pl="2">
                <Button
                  rightIcon={open && <RiArrowDropDownLine size={"30px"} />}
                  leftIcon={<RiDashboard2Line size={"30px"} />}
                  size={"md"}
                  colorScheme="teal"
                  variant="ghost"
                >
                  {open && "Dashboard"}
                </Button>
              </WrapItem>
            </Wrap>
            <Divider margin={2} />

            <Stack>
              <Flex pl="3" justifyContent={"space-between"}>
                <Flex gap={2}>
                  <Avatar marginTop={-1} size={["sm", "md"]} src="" alt="" />
                  <Flex marginTop={0} flexDirection={"column"}>
                    {open && (
                      <>
                        <Text fontWeight={600} fontSize={"xs"}>
                          Haider Ali
                        </Text>
                        <Text fontWeight={600} fontSize={"xs"}>
                          haiderali921195@gmail.com
                        </Text>
                      </>
                    )}
                  </Flex>
                </Flex>

                {open && <RiDoubleQuotesR />}
              </Flex>
            </Stack>
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default ChakraSidebar;
