// icons
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];


const Nav = () => {
  
  const router = useRouter();
  const pathname = router.pathname;

  return <nav className='fixed bottom-0 flex flex-col items-center  mt-auto xl:justify-center gap-y-4 h-max xl:right-[2%] z-50 top-0 w-full xl:max-w-md  xl:w-16 xl:h-screen'>
    {/* inner */}
    <div className='flex items-center justify-between w-full px-4 py-8 text-3xl xl:flex-col xl:justify-center gap-y-10 md:px-40 xl:px-0 h-[80px] xl:h-max bg-white/10 backdrop-blur-sm xl:text-xl xl:rounded-full'>
      {navData.map((link, index)=>(
        <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>
          {/* tooltip */}
          <div className='absolute right-0 hidden overflow-hidden rounded-full pr-11 xl:group-hover:flex'>
            <div className='relative flex items-center bg-white text-primary p-[8px]'>
              <div className='text-[12px] font-semibold leading-none capitalize'>{link.name}</div>
              {/* triangle */}
              <div className='border-l-8 border-solid border-l-white border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
            </div>
          </div>
          <div>
          {link.icon}
          </div>
        </Link>
      ))}
    </div>
  </nav>;
};

export default Nav;
