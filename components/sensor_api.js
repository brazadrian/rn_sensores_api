import axios from "axios";

export default conectaApi()
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

async function conectaApi() {
  try {
    const resposta = await axios.get("https://back-people.onrender.com/sensor");
    const sensores = resposta.data.sensor;
    return sensores;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os sensores:", error);
  }
}

/* 
{
  "_id": "646e8dbfd9504129d66c1d41",
  "nome": "Câmara de combustão",
  "descricao": "Sensor termelétrico",
  "id": "CAMCOMB01",
  "x": 19.8,
  "y": 90,
  "area": "Câmara de combustão",
  "status": "Normal",
  "tipo": "Termelétrico",
  "__v": 0
  },
*/
