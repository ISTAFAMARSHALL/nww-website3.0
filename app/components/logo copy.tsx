import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo/nwwcompasscolorLOGO.png';

export default function Logo() {
  return (
    <Link href=".." 
    className="inline-flex "
    >
      <Image
        src={logo}
        alt="logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
}
