import { fetchAllDogBreeds } from "@/api/fetchAllDogBreeds";
import React, { ReactNode } from "react";

export const HeaderCount = async () => {
  const { count } = await fetchAllDogBreeds();
  return <span className="ml-2 opacity-50">{count}</span>;
};

export const Header = async ({ count }: { count: ReactNode }) => {
  return (
    <header className="sticky top-0 bg-background p-5 md:p-6 z-10">
      <h1 className="text-xl+ font-medium">
        Bakken, Bæck & Barks
        {count}
      </h1>
    </header>
  );
};
