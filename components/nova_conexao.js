import axios from "axios";
const baseUrl = "https://reqres.in";

// Pasando o objeto de configuração para o axios
const fetchUser = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseUrl}/api/users/1`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

// Invocando o método get para realizar uma solicitação GET
const fetchUser = async () => {
  const url = `${baseUrl}/api/users/1`;
  const response = await axios.get(url);
  console.log(response.data);
};
/* 
const axiosInstance = axios.create({ baseURL: "https://reqres.in/" });

axiosInstance.get("api/users/1").then((response) => {
  console.log(response.data);
});
 */