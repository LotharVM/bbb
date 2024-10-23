"use client";

import { DogBreed } from "@/@types/doggos";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { getDogDetails } from "@/utils/getDogDetails";

type Props = {
  data: DogBreed;
  isModal?: boolean;
};

export const Card = ({ data, isModal }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!isModal && pathname === `/${data.id}`)
    return <div className="aspect-[3/4]" />;

  const details = getDogDetails(data);
  const ratio = isModal ? `${data.image.width}/${data.image.height}` : "4/3";

  return (
    <motion.div
      whileHover={!isModal ? { scale: 0.975 } : {}}
      layoutId={data.id.toString()}
      transition={{ duration: 0.5, ease: [0.5, 0.6, 0.3, 1] }}
      className="rounded-xl bg-grey-100 border-grey-500 border overflow-hidden relative h-auto md:h-full pointer-events-auto"
    >
      {isModal && (
        <button className="absolute top-4 left-4 bg-white rounded-full p-2 z-10 w-10 h-10 flex items-center justify-center text-3xl md:hidden">
          ×
        </button>
      )}
      {data.image && (
        <motion.div
          animate={{ aspectRatio: ratio }}
          initial={{ aspectRatio: ratio }}
          className="overflow-hidden relative"
        >
          <Image
            src={data.image.url}
            alt={data.name}
            width={data.image.width}
            height={data.image.height}
            priority={isModal}
            className="w-full h-full object-cover absolute inset-0 object-top"
          />
        </motion.div>
      )}
      <div className="p-6 flex flex-col gap-3">
        {details.map((detail) => {
          if (!detail.value) return null;
          return (
            <div key={detail.title} className="text-sm">
              <h2 className="font-medium">{detail.title}</h2>
              <h3>{detail.value}</h3>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
