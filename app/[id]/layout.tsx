import { Suspense } from "react";
import Home from "@/app/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Home />
      {children}
    </>
  );
}
