import uuid from "uuid";

export const base_api_url = "https://reactnd-books-api.udacity.com";

export const config = {
  headers: {
    Accept: "application/json",
    Authorization: uuid.v4()
  }
}

