import { api } from "../../instance";

export const BASE_URL = "https://swapi.dev/api";

export const fetchCharacters = async (searchTerm = "", page = 1) => {
   const response = await api.get(`${BASE_URL}/people`, {
      params: {
         search: searchTerm,
         page: page,
      },
   });
   return response.data;
};

export const fetchCharacterById = async (id: string) => {
   const response = await api.get(`${BASE_URL}/people/${id}`);
   return response.data;
};
