'use client';

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import LinkedinIcon from "@/app/images/social-icons/5296501_linkedin_network_linkedin logo_icon.png";
import YouTubeIcon from "@/app/images/social-icons/5296521_play_video_vlog_youtube_youtube logo_icon.png";
import TwitterIcon from "@/app/images/social-icons/11244080_x_twitter_elon musk_twitter new logo_icon.png";

export default function Testimonial({
  testimonial,
  onClick,
  cloned = false,
  className,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    title: string;
    name: string;
    username?: string;
    date: string;
    rating?: number;
    videoUrl?: string;
    videoThumb?: StaticImageData;
    channel?: string;
  };
  onClick?: () => void;
  cloned?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const channelIcon = (channel: string) => {
    switch (channel) {
      case "Twitter":
        return (
          <Link
            className="flex items-center justify-center transition hover:opacity-80"
            href=""
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon.src} alt="Twitter" className="h-8 w-8" />
          </Link>
        );
      case "YouTube":
        return (
          <Link
            className="flex items-center justify-center transition hover:opacity-80"
            href="https://www.youtube.com/channel/UC_GuuTjdzX92sVsQaN4iNWA/videos"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTubeIcon.src} alt="YouTube" className="h-8 w-8" />
          </Link>
        );
      case "LinkedIn":
        return (
          <Link
            className="flex items-center justify-center transition hover:opacity-80"
            href="https://www.linkedin.com/posts/greatpeopleknowgreatpeople_more-than-just-a-lunch-celebrates-1-year-activity-7123283175434260480-RqI6/?utm_source=share&utm_medium=member_desktop"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon.src} alt="LinkedIn" className="h-8 w-8" />
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-[#F9F9F9]/70 p-5 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(white,white)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1 ${className}`}
      onClick={onClick}
    >
      <header className="mb-4 flex items-center gap-3">
        {testimonial.img && (
          <Image
            className="shrink-0 rounded-full"
            src={testimonial.img}
            width={44}
            height={44}
            alt={testimonial.name}
          />
        )}
        <div>
          <div style={{textAlign: "center" }} className="font-bold text-[#0D1F2D]">{testimonial.name}</div>
          <div style={{textAlign: "center" }}  className="text-sm font-sm italic text-[#546A7B]">
            {testimonial.title}
          </div>
          {testimonial.username && (
            <div>
              <a
                className="text-sm font-medium text-[#546A7B]/80 transition hover:text-[#546A7B]"
                href="#0"
                tabIndex={cloned ? -1 : 0}
              >
                {testimonial.username}
              </a>
            </div>
          )}
        </div>
      </header>
      {testimonial.rating && (
        <div className="mb-3 inline-flex">
          <span className="sr-only">Rating is 5 out of 5</span>
          <div className="relative">
            <svg
              className="fill-[#F9F9F9]"
              xmlns="http://www.w3.org/2000/svg"
              width={114}
              height={18}
            >
              <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
            </svg>
            <div className="absolute inset-0 overflow-hidden" style={{ width: "100%" }}>
              <svg
                className="fill-[#FF8577]"
                xmlns="http://www.w3.org/2000/svg"
                width={114}
                height={18}
              >
                <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {testimonial.videoThumb ? (
        <div className="grow">
          <p className="mb-4 font-semibold text-[#0D1F2D]">{children}</p>
          <a href={testimonial.videoUrl} tabIndex={cloned ? -1 : 0}>
            <Image
              className="w-full"
              src={testimonial.videoThumb}
              width={312}
              height={180}
              alt="View on YouTube"
            />
          </a>
        </div>
      ) : (
        <div className="grow text-sm text-[#546A7B]">{children}</div>
      )}
      <footer className="mt-4 flex items-center gap-2.5 text-[#546A7B]">
        {testimonial.channel && channelIcon(testimonial.channel)}
        <div className="text-xs">{testimonial.date}</div>
      </footer>
    </article>
  );
}
