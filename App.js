import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import { Platform, StatusBar } from "react-native";
import Sensores from "./components/Sensores";
import TableScreen from "./components/TableScreen";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />

      <Heading size="lg">Sensores</Heading>
      <HStack alignItems="center">
        <TableScreen />
      </HStack>
    </NativeBaseProvider>
    // <NativeBaseProvider>
    //   <StatusBar style="auto" />
    //   <Center px={4} flex={1}>
    //     <VStack space={2} alignItems="center">
    //       <Heading size="lg">Sensores</Heading>
    //       <Sensores />

    // <NativeBaseProvider>
    //   <StatusBar style="auto" />
    //   <Center px={4} flex={1}>
    //     <VStack space={2} alignItems="center">
    //       <Heading size="lg">Sensores</Heading>
    //       <Sensores />
    //       <HStack space={2} alignItems="center">
    //         <Text>Edit</Text>
    //         <Box
    //           _web={{
    //             _text: {
    //               fontFamily: "monospace",
    //               fontSize: "sm",
    //             },
    //           }}
    //           px={2}
    //           py={1}>
    //           App.js
    //         </Box>
    //         <Text>and save to reload.</Text>
    //       </HStack>
    //       <Link href="https://docs.nativebase.io" isExternal>
    //         <Text color="primary.500" underline fontSize={"xl"}>
    //           Learn NativeBase
    //         </Text>
    //       </Link>
    //     </VStack>
    //   </Center>
    //   </NativeBaseProvider>
  );
  s;
}
