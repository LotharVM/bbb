import { Suspense } from "react";
import { Header, HeaderCount } from "@/components/Header";
import { fetchAllDogBreeds } from "@/api/fetchAllDogBreeds";
import { Grid } from "@/components/Grid";

const SuspendedGrid = async () => {
  const { items } = await fetchAllDogBreeds({ offset: 8 });
  return <Grid items={items} />;
};

export default async function Home() {
  const { items: initialData } = await fetchAllDogBreeds({ limit: 8 });
  return (
    <>
      <Header
        count={
          <Suspense>
            <HeaderCount />
          </Suspense>
        }
      />
      <main>
        <div className="container my-14">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Grid items={initialData} />
            <Suspense fallback={"Fetching remaining dogs"}>
              <SuspendedGrid />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
