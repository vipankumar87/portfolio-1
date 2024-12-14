import Image from "next/image"

import Link from "next/link"

import Socials from "../components/Socials";

const Header = () => {
  return <header className="absolute z-30 flex items-center w-full px-16 xl:px-0 xl:h-[100px]">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between py-8 lg:flex-row gap-y-6 ">
        {/* logo */}
        <Link href="/" className="flex flex-col items-center justify-center xl:flex-row">
          <Image src="/a-Technology.svg" className="px-0 xl:px-2" width={100} height={40} alt="" priority={true}
        />
        <span className="text-3xl">Vipan Kumar</span>
        </Link>
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
