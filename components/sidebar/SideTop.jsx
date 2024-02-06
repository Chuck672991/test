import React from 'react'
import { RiArrowDropDownLine, RiDashboard2Line, RiThreadsLine } from "react-icons/ri";

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
    Spacer,
    background,
  } from "@chakra-ui/react";

const SideTop = ({icon,name,notification}) => {
  return (
    <Stack mt={2} id="side-top">
      <Button bg={'transparent'} ml={2} >
      <Flex
      width={"full"}
      justifyContent="center"
      alignItems="center"
      fontSize={14}
      
      gap={2}
    >
      <Icon boxSize={6}>{icon}</Icon>
      <Text>{name}</Text>

      {notification && (
        <WrapItem>
          <div
            style={{
              height: "20px",
              fontSize: "10px",
              width: "20px",
              marginLeft: "2rem",
              borderRadius: "50%",
              backgroundColor: "purple",
              color: 'white',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {notification}
          </div>
        </WrapItem>
      )}
    </Flex>
      </Button>
    

     
    </Stack>
  )
}

export default SideTop