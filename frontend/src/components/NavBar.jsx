import React from "react";

import { Button, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Container maxWidth={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          textTransform={"uppercase"}
          textAlign={"center"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"} >
              <Link to={"/create"}>
              <Button></Button>
              </Link>
        </HStack>
      </Flex>
    </Container>
  );
};
