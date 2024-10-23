import { Card } from "@/components/Card";
import { fetchSingleDogBreed } from "@/api/fetchSingleDogBreed";
import { notFound } from "next/navigation";
import { MotionDiv } from "@/components/Motion";
import Backdrop from "@/components/Backdrop";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await fetchSingleDogBreed({ id });
  if (!data) return notFound();

  return (
    <Backdrop>
      <div className="relative h-full w-full flex md:items-center justify-center overflow-auto">
        <div className="w-full md:max-w-[30vw] overflow-auto md:overflow-visible h-auto md:max-h-[90vh]">
          <Card isModal data={data} />
        </div>
      </div>
    </Backdrop>
  );
}
