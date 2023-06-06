import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const Conecta_filmes = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getSensores = async () => {
    try {
      const response = await fetch("https://back-people.onrender.com/sensor");
      const json = await response.json();
      setData(json.sensor);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSensores();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 70,
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text style={{ borderWidth: 10 }}>
              {item.nome}, {item.id}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default Conecta_filmes;

// return (
//   <View
//     style={{
//       flex: 1,
//       padding: 70,
//     }}>
//     {isLoading ? (
//       <ActivityIndicator />
//     ) : (
//       <FlatList
//         data={data}
//         keyExtractor={({ id }) => id}
//         renderItem={({ item }) => (
//           <Text>
//             {item.title}, {item.releaseYear}
//           </Text>
//         )}
//       />
//     )}
//   </View>
// );
