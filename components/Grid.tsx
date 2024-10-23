import { DogBreed } from "@/@types/doggos";
import Link from "next/link";
import { Card } from "./Card";

export const Grid = ({ items }: { items: DogBreed[] }) => {
  return (
    <>
      {items.map((item) => (
        <Link key={item.id} scroll={false} href={`/${item.id}`}>
          <Card data={item} />
        </Link>
      ))}
    </>
  );
};
