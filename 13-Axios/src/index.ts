import axios, { AxiosResponse } from "axios";
import { Todo } from "./todo";

// export interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log("todo, ", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Manejar los errores de Axios
      console.log("AXios Error: ", error.message);

      if (error.response) {
        // Se realizó la solicitud, pero el servidor respondió con un código de estado fuera del rango de 2xx
        console.log("Status: ", error.status);
        console.log("Data: ", error.response.data);
      }
    } else {
      // Manejar otros errores
      console.log("Error: ", error.message);
    }
  }
};

fetchData();
