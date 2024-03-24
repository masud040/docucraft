import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          alt="Protocol"
          width={100}
          height={24}
          className="w-auto h-6"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
