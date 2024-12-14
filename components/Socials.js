import Link from "next/link";
import {RiYoutubeLine,
RiBehanceFill,
RiPinterestFill,
RiInstagramLine, RiFacebookLine, RiDribbbleLine} from 'react-icons/ri';

const Socials = () => {
  return <>
  <div className="flex items-center text-lg gap-x-5">
      <Link href="https://www.youtube.com/@rudracomputerinstitute" target="_blank" className="transition-all duration-300 hover:text-accent">
        <RiYoutubeLine/>
      </Link>
      <Link href="" className="transition-all duration-300 hover:text-accent">
        <RiBehanceFill />
      </Link>
      <Link href="https://in.pinterest.com/vipanparjapti/" target="_blank" className="transition-all duration-300 hover:text-accent">
        <RiPinterestFill/>
      </Link>
      <Link href="https://www.instagram.com/my.rudracomputer/" target="_blank" className="transition-all duration-300 hover:text-accent">
        <RiInstagramLine/>
      </Link>
      <Link href="https://www.facebook.com/rudra.computer.tech" target="_blank" className="transition-all duration-300 hover:text-accent">
        <RiFacebookLine/>
      </Link>
      <Link href="" className="transition-all duration-300 hover:text-accent">
        <RiDribbbleLine/>
      </Link>
    </div>  
  
  </>;
};

export default Socials;
