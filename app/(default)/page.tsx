export const metadata = {
  title: "More Than Just a Lunch",
  description: "Our mission is to foster an environment where every interaction leads to transformative growth and mutual success.",
};

import ImageSlideShow from "@/app/components/image-slide-show";

import HomePageContent from "@/app/components/home-page-content";

import HomePageVideo from "@/app/components/home-page-video";

import TestimonialsCarousel from "@/app/components/testimonials-carousel";

import LunchDisplay from "../components/lunch-display";

export default function Home() {
  return (
    <div className="main">
      <ImageSlideShow />;
      <HomePageContent />;
      <LunchDisplay />;
      <HomePageVideo />;
      <TestimonialsCarousel />;
      
    </div>
  );
}
