import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="p-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs md:text-sm xl:text-md"> &copy; 2021 CallData</p>
        <ul className="flex flex-row mt-6">
          <Link href="https://twitter.com" passHref>
            <li className="text-xs md:text-sm xl:text-md">Twitter</li>
          </Link>
          <Link href="#" passHref>
            <li className="pl-8 text-xs md:text-sm xl:text-md">Blog</li>
          </Link>
          <Link href="/policies/cookie-policy" passHref>
            <li className="pl-8 text-xs md:text-sm xl:text-md">
              Cookie Policy
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
