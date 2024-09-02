import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo/nww-logo-flat (1).png';

export default function Logo() {
  return (
    <Link href=".." className="inline-flex btn-sm bg-[#F4A690] hover:bg-[#0D1F2D] transition ">
      <Image
        src={logo}
        alt="logo"
        width={120}
        height={250}
        priority
      />
    </Link>
  );
}
