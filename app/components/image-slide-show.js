"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import HomePageIMG from "@/app/images/home-page-header-images/2024-05-29 (1).jpeg";
import HomePageIMG2 from "@/app/images/home-page-header-images/2024-06-11  (1).jpeg";
import HomePageIMG3 from "@/app/images/home-page-header-images/2024-06-26 (4).jpeg";
import HomePageIMG4 from "@/app/images/home-page-header-images/2024.01.31_Motley Crew doing Yave shots.jpg";
import HomePageIMG5 from "@/app/images/home-page-header-images/Pasted Graphic.png";
import HomePageIMG6 from "@/app/images/home-page-header-images/Pasted Graphic 1.png";

const images = [
  { image: HomePageIMG6, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG2, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG3, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG5, alt: "More Than Just A Lunch!" },
  { image: HomePageIMG4, alt: "More Than Just A Lunch!" },
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "ease-in-out",
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          <Image
            src={img.image}
            alt={img.alt}
            fill
            priority={index === currentImageIndex}
          />
        </div>
      ))}

      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent dark overlay
          zIndex: 1,
        }}
      ></div>

      <div>
        {/* Curved Text for Larger Screens */}
        <svg
          className="curved-text"
          viewBox="0 0 1200 300"
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "100%",
            opacity: isSmallScreen ? 0 : 1,
            transition: "opacity .3s ease",
            textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff", // white outline
          }}
        >
          <path
            id="curve1"
            d="M 100,200 Q 600,50 1100,200"
            fill="transparent"
          />
          <text width="1200">
            <textPath
              xlinkHref="#curve1"
              startOffset="50%"
              textAnchor="middle"
              style={{
                fontSize: "clamp(1rem, 2vw, 2.5rem)", // Scales between 1rem and 2.5rem
                fill: "#F0896C",
                fontWeight: "900",
                textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff", // white outline
                padding: "20px",
              }}
            >
              Not your ordinary people & not just a meal. It's...
            </textPath>
          </text>
        </svg>

        {/* Straight Text for Smaller Screens */}
        <h2
          className="straight-text"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
            fontSize: "clamp(1.5rem, 4vw, 3rem)", // Scales between 1.5rem and 3rem
            color: "#F0896C",
            fontWeight: "900",
            textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff", // white outline
            padding: "10px",
            width: "100%",
            opacity: isSmallScreen ? 1 : 0,
            transition: "opacity .3s ease",
          }}
        >
          Not your ordinary people & not just a meal. It's...
        </h2>

        {/* Main Title Text */}
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 4rem)", // Scales between 2rem and 4rem
            color: "#F0896C",
            fontWeight: "750",
            textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff", // white outline
            paddingBottom: "10px",
            width: "100%",
            padding: "20px",
          }}
        >
          "More Than Just a Lunch"!
        </h1>

        {/* Buttons */}
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          <Link href="#home-page-content" className="btn-sm text-lg bg-[#F0896C] text-[#F9F9F9] hover:text-[#0D1F2D] transition">
            Learn More
          </Link>
          <Link href="/form" className="btn-sm text-lg bg-[#F0896C] text-[#F9F9F9] hover:text-[#0D1F2D] transition">
            Request to Attend
          </Link>
        </div>
      </div>
    </div>
  );
}