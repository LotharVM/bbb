import { DogBreed, DogBreedDetails, DogBreedImage } from "@/@types/doggos";
import { api } from "./api";

export const fetchSingleDogBreed = async ({
  id,
}: {
  id: string;
}): Promise<DogBreed> => {
  try {
    const details = await api<DogBreedDetails>({ path: `breeds/${id}` });
    const image = await api<DogBreedImage>({
      path: `images/${details.reference_image_id}`,
    });

    return { ...details, image };
  } catch {
    throw new Error(`Error fetching dog breed with id ${id}`);
  }
};
