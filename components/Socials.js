import Link from "next/link";
import {RiYoutubeLine,
RiBehanceFill,
RiPinterestFill,
RiInstagramLine, RiFacebookLine, RiDribbleLine} from 'react-icons/ri';

const Socials = () => {
  return <div>S
    <Link href="" className="transition-all duration-300 hover:text-accent">
      <RiYoutubeLine/>
    </Link>
    <Link href="" className="transition-all duration-300 hover:text-accent">
      <RiBehanceFill />
    </Link>
    <Link href="" className="transition-all duration-300 hover:text-accent">
      <RiPinterestFill/>
    </Link>
    <Link href="" className="transition-all duration-300 hover:text-accent">
      <RiInstagramLine/>
    </Link>
    <Link href="" className="transition-all duration-300 hover:text-accent">
      <RiFacebookLine/>
    </Link>
    <Link href="" className="transition-all duration-300 hover:text-accent">
      <RiDribbleLine/>
    </Link>
  </div>;
};

export default Socials;
