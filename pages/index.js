
import { Heading, Text, Wrap,Flex } from "@chakra-ui/react";
import ChakraNav from "@/components/sidebar/ChakraNav";
import ChakraSidebar from "./sidebar";
// import Card from "@/nextcompos/Card";
import MyCard from "@/nextcompos/Card";
export default function Home() {
  return (
    <>
      <Flex>
  <ChakraSidebar /> 
  <Flex flex={1} flexDirection="column">
    <ChakraNav />
    <MyCard/>
  </Flex>
 
</Flex>
  
    </>
  );
}
