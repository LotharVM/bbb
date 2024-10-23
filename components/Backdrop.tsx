"use client";

import React from "react";
import { MotionDiv } from "./Motion";
import { useRouter } from "next/navigation";

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <MotionDiv
      className="fixed inset-0 bg-black/40 z-20"
      onClick={() => router.back()}
      style={{
        cursor: "url('https://fav.farm/🐶') 15 0, auto",
      }}
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(5px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
    >
      {children}
    </MotionDiv>
  );
};

export default Backdrop;
