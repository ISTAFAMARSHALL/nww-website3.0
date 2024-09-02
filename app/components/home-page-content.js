'use client';

import Image from 'next/image';
import HomePageIMG from '@/app/images/home-page-content-images/2024-06-19 Punctuality is Key (25).jpeg';
import HomePageIMG2 from '@/app/images/home-page-content-images/WhatsApp Image 2024-05-22 at 3.18.19 PM.jpeg';
import HomePageIMG3 from '@/app/images/home-page-content-images/2023.11.22_Healthcare.jpg';

const contentData = [
  {
    image: HomePageIMG,
    header: 'Attendees',
    headline: 'Elite Visionaries and Achievers',
    text: 'A room filled with people who refuse to settle for mediocrity, who are driven by curiosity and a relentless pursuit of excellence. These are individuals who believe in paying it forward and cherish the value of meaningful connections and insightful conversations.',
  },
  {
    image: HomePageIMG2,
    header: 'What We Do',
    headline: 'Connect High Caliber People',
    text: 'Our mission is to foster an environment\
    where every interaction leads to transformative growth and mutual\
    success.\ This is not just networking—it’s a uniquely enriching\
    experience.',
  },
  {
    image: HomePageIMG3,
    header: 'What to Expect',
    headline: 'Prepare for an exclusive experience',
    text: 'Join us for an exclusive event led by the renowned Adam Connors, featuring a carefully curated group of no more than 8  carefully chosen, high-caliber individuals. Dive into stimulating discussions and gain valuable insights in a transformative experience that will inspire and challenge you to reach new heights.',
  },
];

export default function ContentComponent() {
  return (
    <div
      id="home-page-content"
      style={{marginTop: '100px'}}
      className="flex flex-col items-center max-w-4xl mx-auto mt-16 gap-12 font-sans text-[#0D1F2D]"
    >
      {contentData.map((item, index) => (
        <div
          key={index}
          className={`flex items-center w-full gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div className="flex-1 relative h-80">
            <Image
              src={item.image}
              alt={`Content Image ${index + 1}`}
              fill
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 text-lg leading-relaxed">
            <h1 className="text-3xl font-bold text-[#F4A690] mb-4">{item.header}</h1>
            <h3 className="font-semibold  text-xl mb-2">{item.headline}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
