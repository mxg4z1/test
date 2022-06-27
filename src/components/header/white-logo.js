import Link from "next/link";
import Image from "next/image";

function WhiteLogo() {
  return (
    <Link href="/">
      <a className="inline-block align-middle leading-[1]">
        <Image
          src="/images/logo/logo-footer.webp"
          alt="Logo"
          width={300}
          height={100}
        />
      </a>
    </Link>
  );
}

export default WhiteLogo;
