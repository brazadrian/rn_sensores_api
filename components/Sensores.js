import { Box, HStack, Heading, Spacer, VStack } from "native-base";
import { FlatList, Text } from "react-native";

import sensores from "./sensor_api";

function Sensores() {
  const dados_sensores = sensores;
  dados_sensores
    .then((data) => {
      teste = JSON.parse(JSON.stringify(data));

      sensores_resgatados = [
        {
          _id: teste[0]._id,
          nome: teste[0].nome,
          descricao: teste[0].descricao,
          id: teste[0].id,
          x: teste[0].x,
          y: teste[0].y,
          area: teste[0].area,
          status: teste[0].status,
          tipo: teste[0].tipo,
          __v: teste[0].__v,
        },
      ];

      return sensores_resgatados;
    })
    .catch((error) => {
      console.log(error);
      console.error("Houve algum erro na conexão, error: " + error);
    })
    .finally(() => {
      console.log("Conexão com API finalizada.");
    });

  return (
    <Box>
      <Text></Text>
      {/* <Heading fontSize="xl" p="4" pb="3">
        Sensores
      </Heading> */}
      {/* <FlatList
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
      /> */}
    </Box>
  );
}

export default Sensores;
