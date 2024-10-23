import { DogBreed } from "@/@types/doggos";
import { api } from "./api";

type Params = {
  limit?: number;
  offset?: number;
};

export const fetchAllDogBreeds = async (params?: Params) => {
  const data = await api<DogBreed[]>({
    path: "breeds",
    params: params?.limit ? params : {},
  });

  // a self-added feature to fetch a specific offset, since the API doesn't support it.
  // not a good practice, but it's for demo purposes
  const offsetData = params?.offset ? data.slice(params.offset) : data;

  return {
    items: offsetData,
    count: data.length,
  };
};
