import Image from 'next/image';
import Mockup from '@/root/assets/jumbotron-mockup.png';
import MockupSmall from '@/root/assets/jumbotron-mockup-small.png';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col pb-20 md:grid md:grid-cols-2 md:grid-flow-row md:place-items-center">
      <div className="hidden md:block">
        <Image alt="mockup-screem" src={Mockup} />
      </div>
      <div className="block md:hidden">
        <Image alt="mockup-screen" src={MockupSmall} />
      </div>
      <div className="grid justify-items-center md:justify-items-start p-6 lg:ml-10">
        <h1 className="text-center md:text-left leading-smooth text-3xl xl:text-5xl xl:leading-normal font-bold md:leading-snug md:text-4xl">
          Get down to business <br /> and grow sales
        </h1>
        <p className="md:mt-5 text-center font-regular mt-5 md:text-left md:text-md md:leading-8 xl:text-xl xl:leading-normal">
          Dapps can now drive more sales by using CallData for onchain marketing
          & notification system. Powerful marketing tools for dapps.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
