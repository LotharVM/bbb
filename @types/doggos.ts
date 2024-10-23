export type DogBreed = {
  weight: { imperial: string; metric: string };
  height: { imperial: string; metric: string };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
};

export type DogBreedDetails = {
  weight: { imperial: string; metric: string };
  height: { imperial: string; metric: string };
  id: number;
  name: string;
  country_code: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
};

export type DogBreedImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: DogBreed[];
};
