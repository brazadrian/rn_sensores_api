import { Avatar, Box, HStack, Heading, Spacer, VStack } from "native-base";
import { FlatList, Text } from "react-native";

import sensores from "./sensor_api";

function Sensores() {
  const data = sensores._j;
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Sensores
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={10} justifyContent="space-between">
              <VStack>
                <Text bold>{item.nome}</Text>
                <Text>{item.id}</Text>
              </VStack>

              <Spacer />

              <Text>{item.status}</Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
}

export default Sensores;
