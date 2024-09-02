"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header2 from '@/app/components/header'

import Footer2 from '@/app/components/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      
      <Header2 />

      <main className="grow">{children}</main>

      
      <Footer2 border={true} />
    </>
  );
}
