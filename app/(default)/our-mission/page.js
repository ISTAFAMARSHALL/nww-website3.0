'use client';

import Image from 'next/image';

import img1 from '@/app/images/mission-page/68 OF INDIVIDUALS PREFER.png';
import img2 from '@/app/images/mission-page/85 of jobs are filled via.png';
import img3 from '@/app/images/mission-page/PROFESSIONALS.png';
import img4 from '@/app/images/mission-page/Adam Connors Headshot_6.jpg';

export default function OurMission() {
  return (
    <section style={{ marginTop: '60px' }} className="flex flex-col items-center justify-center py-16 bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#0D1F2D' }}>Our Mission</h2>
        <p className="text-lg leading-relaxed mb-10" style={{ color: '#546A7B' }}>
          Our mission is to foster meaningful connections and professional growth by bringing together high-caliber, like-minded individuals over great food and even better company. We aim to create a supportive and engaging environment where members can share knowledge, build relationships, and collaborate on opportunities that drive personal and professional success.
        </p>
        <blockquote className="text-xl italic font-medium mb-12" style={{ color: '#7A8B99' }}>
          “If you want to go fast - go alone... if you want to go far - go together”
        </blockquote>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Image
            src={img1}
            alt="Networking statistic 1"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
            style={{ borderColor: '#0D1F2D' }}
          />
          <Image
            src={img2}
            alt="Networking statistic 2"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
            style={{ borderColor: '#0D1F2D' }}
          />
          <Image
            src={img3}
            alt="Networking statistic 3"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
            style={{ borderColor: '#0D1F2D' }}
          />
        </div>
      </div>
      <div className="max-w-4xl text-center mt-16">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#0D1F2D' }}>About Adam Connors</h2>
        <p className="text-lg leading-relaxed mb-10" style={{ color: '#546A7B' }}>
          Adam Connors is the Founder & CEO of NetWorkWise, a company dedicated to advancing networking skills for individuals and organizations through education. A recognized social architect and super-connector, Adam is renowned for his vast network and ability to facilitate high-level connections.
        </p>
        <p className="text-lg leading-relaxed mb-10" style={{ color: '#546A7B' }}>
          With over 20 years of entrepreneurial experience, Adam has built companies across various industries, including executive search firms, career consulting, and real estate. He has also served in senior roles in finance, neurotechnology, and sports & entertainment. Originally from New York, Adam now lives with his family in Hoboken, New Jersey.
        </p>
        <Image
          src={img4}
          alt="Adam Connors"
          width={200}
          height={200}
          className="rounded-full shadow-lg mx-auto"
        />
      </div>
    </section>
  );
}
