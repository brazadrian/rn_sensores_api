import axios from "axios";

async function conectapi() {
  try {
    const response = await axios.get("https://back-people.onrender.com/sensor");
    return response.data.sensor;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os sensores:", error);
  }
}

sensores = conectapi();

export default sensores;

/* 
{
  "sensor": [
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
    {
      "_id": "646f34432c036a255125f276",
      "nome": "Gaseoduto",
      "descricao": "Sensor de fumaça",
      "id": "GASUTO01",
      "x": 30,
      "y": 40,
      "area": "Gaseoduto",
      "status": "Normal",
      "tipo": "Fumaça",
      "__v": 0
    },
    {
      "_id": "64716305191ae980d407c73b",
      "nome": "Difusor",
      "descricao": "Difusor gasoso",
      "id": "DIFGAS01",
      "x": 40,
      "y": 50,
      "area": "Pátio externo 1",
      "status": "Normal",
      "tipo": "Gases",
      "__v": 0
    },
    {
      "_id": "64754622d01e553e247af1f2",
      "nome": "Gaseoduto",
      "descricao": "Difusor gasoso",
      "id": "GASUTO02",
      "x": 48.5,
      "y": 50,
      "area": "Câmara",
      "status": "Normal",
      "tipo": "Gases",
      "__v": 0
    }
  ]
}

*/
