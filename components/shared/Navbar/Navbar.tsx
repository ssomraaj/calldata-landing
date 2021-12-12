import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/root/assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="grid pt-10 pb-20 md:flex md:justify-between md:flex-row p-6">
      <Link href="/" passHref>
        <button className="hover:cursor-pointer">
          <Image alt="calldata logo" height={40} src={Logo} width={144} />
        </button>
      </Link>
      <ul className="hidden md:block md:flex md:justify-evenly md:items-center">
        <li className="font-medium vrlps-trigger">Join the Waitlist</li>
        <li className="font-medium md:pl-5">
          <Link href="https://twitter.com/calldata_xyz" passHref>
            Our Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
