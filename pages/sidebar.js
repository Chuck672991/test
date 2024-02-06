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
    Spacer,
    HStack,
    Icon,
    Center,
    Box,
  } from "@chakra-ui/react";
  import { SlCalender } from "react-icons/sl";

  import { IoSettingsOutline,IoReorderThreeOutline } from "react-icons/io5";
  import { PiSignOutLight } from "react-icons/pi";

  import { TfiBell,TfiAnnouncement  } from "react-icons/tfi";
  import { CiFolderOn } from "react-icons/ci";
  import { GoPeople } from "react-icons/go";

  import SideTop from "@/components/sidebar/SideTop";
  import { RiDoubleQuotesR,RiHome5Line } from "react-icons/ri";
  import React, { useState } from "react";
  import {
    RiArrowDropDownLine,
    RiDashboard2Line,
    RiThreadsLine,
  } from "react-icons/ri";
  import { ArrowBackIcon } from "@chakra-ui/icons";
//   import SideTop from "./SideTop";
  
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
              <IoReorderThreeOutline size={20} />
            </Icon>
          </Wrap>
          <Box p={2}>
            {open && (
            <Input
            border="none"
            borderBottom="1px solid grey"
            focusBorderColor="1px solid black"
            mt={3}
            size={["sm", "md"]}
            placeholder="Search Anything"
          />         )}
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
              icon={<RiHome5Line size={"25px"} />}
              name={open && "Home "}
            />
            <SideTop
              icon={<TfiBell size={"25px"} />}
              name={open && "Notification"}
              notification={open && 10}
            />
            <SideTop
              icon={<TfiAnnouncement  size={"25px"} />}
              name={open && "News and Announcement"}
            />
            <SideTop
              icon={<CiFolderOn size={"25px"} />}
              name={open && "Contact Library"}
            />
            <SideTop
              icon={<GoPeople  size={"25px"} />}
              name={open && "Employees"}
            />
             <SideTop
              icon={<SlCalender size={"25px"} />}
              name={open && "My Calender"}
            />
          <Divider w={"70%"} m={6}></Divider>


<SideTop
              icon={<IoSettingsOutline size={"25px"} />}
              name={open && "Setting"}
            />
             <SideTop
              icon={<PiSignOutLight size={"25px"} />}
              name={open && "Sign Out"}
            />
          </Stack>
          <Divider  m={6}></Divider>


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
    
        </div>
      </div>
    </section>
    );
  };
  
  export default ChakraSidebar;
  