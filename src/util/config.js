import uuid from "uuid";

export const base_api_url = "https://reactnd-books-api.udacity.com";

// Gera um token exclusivo para armazenar dados da biblioteca no servidor de back-end.
let token = localStorage.token;
if (!token) localStorage.token = uuid.v4();

// Headers for GET requests
export const config = {
  headers: {
    Accept: "application/json",
    Authorization: token
  }
};

// Headers for POST / PUT requests
export const configType = {
  headers: {
    "Content-Type": "application/json",
    Authorization: token
  }
};



