import { DogBreed } from "@/@types/doggos";

export const getDogDetails = (dog: DogBreed) => {
  console.log(dog);
  const details = [
    {
      title: "Breed",
      value: dog.name,
    },
    {
      title: "Breed group",
      value: dog.breed_group,
    },
    {
      title: "Weight",
      value: `${dog.weight.metric} kg`,
    },
    {
      title: "Height",
      value: `${dog.height.metric} cm`,
    },
    {
      title: "Life span",
      value: dog.life_span,
    },
    {
      title: "Temperament",
      value: dog.temperament,
    },
  ];

  return details;
};
