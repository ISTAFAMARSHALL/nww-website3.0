import Link from "next/link";
import Logo from "./logo";

import LinkedinIcon from "@/app/images/social-icons/5296501_linkedin_network_linkedin logo_icon.png";
import YouTubeIcon from "@/app/images/social-icons/5296521_play_video_vlog_youtube_youtube logo_icon.png";
import InstagramIcon from "@/app/images/social-icons/5296765_camera_instagram_instagram logo_icon.png";
import FacebookIcon from "@/app/images/social-icons/5296499_fb_facebook_facebook logo_icon.png";
import TwitterIcon from "@/app/images/social-icons/11244080_x_twitter_elon musk_twitter new logo_icon.png";
import VimeoIcon from "@/app/images/social-icons/5296519_video_vimeo_vimeo logo_icon.png";

export default function Footer({ border = false }) {
  return (
    <footer style={{ justifyContent: "center" }} className="footer">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`grid gap-10 py-8 left sm:grid-cols-12 md:py-12 ${border ? "border-t border-[#546A7B]" : ""}`}>
          <div  className="space-y-2 sm:col-span-12 lg:col-span-4">
            <Logo />
            <div className="text-sm text-[#0D1F2D]">
              &copy; MoreThanJustaLunch.com - All rights reserved.
            </div>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-[#0D1F2D]">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/our-mission" className="text-[#546A7B] hover:text-[#F4A690] transition">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="https://www.networkwise.com/articles/networking-articles/" target="_blank" rel="noopener noreferrer" className="text-[#546A7B] hover:text-[#F4A690] transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-[#0D1F2D]">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://www.networkwise.com" target="_blank" rel="noopener noreferrer" className="text-[#546A7B] hover:text-[#F4A690] transition">
                  NetWorkWise
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#546A7B] hover:text-[#F4A690] transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="https://www.networkwise.com/shop/" target="_blank" rel="noopener noreferrer" className="text-[#546A7B] hover:text-[#F4A690] transition">
                  Store Info
                </Link>
              </li>
            </ul>
          </div>

          <div style={{justifyContent: 'left'}}
            className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 style={{textAlign: 'center'}} className="text-sm font-medium text-[#0D1F2D]">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link href="https://www.linkedin.com/company/network-wise/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:opacity-80">
                  <img src={LinkedinIcon.src} alt="LinkedIn" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UC_GuuTjdzX92sVsQaN4iNWA/videos" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:opacity-80">
                  <img src={YouTubeIcon.src} alt="YouTube" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/networkwise/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:opacity-80">
                  <img src={InstagramIcon.src} alt="Instagram" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/TheNetWorkWise/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:opacity-80">
                  <img src={FacebookIcon.src} alt="Facebook" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/thenetworkwise" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:opacity-80">
                  <img src={TwitterIcon.src} alt="Twitter" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="https://vimeo.com/networkwise" aria-label="Vimeo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:opacity-80">
                  <img src={VimeoIcon.src} alt="Vimeo" className="h-8 w-8" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
