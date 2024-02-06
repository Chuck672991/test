import React from "react";
import { Icon, Image, useColorMode } from "@chakra-ui/react";
import { RiBasketballFill, RiSafariFill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";

import {
  Stack,
  MenuItem,
  Button,
  Box,
  Text,
  Wrap,
  Spacer,
  WrapItem,ButtonGroup,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ChakraNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <nav>
        <Flex p="2" borderTop={"4px solid #a565e0"} borderBottom={"4px solid #a565e0"}  minWidth="max-content" alignItems="center" gap="2">
          <Box  p="2">
            <Image  src={colorMode === 'dark'? `http://176.105.148.111:3000/_next/image?url=%2FHassanaLogoD.png&w=256&q=75` : `http://176.105.148.111:3000/_next/image?url=%2FHassanaLogoL.png&w=256&q=75"`} size="md"></Image>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
          <Icon boxSize={6} as={MdSettings} />
            <Icon boxSize={6} onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Icon>
          </ButtonGroup>
        </Flex>
      </nav>
    </nav>
  );
};
{
  /*  */
}

export default ChakraNav;
