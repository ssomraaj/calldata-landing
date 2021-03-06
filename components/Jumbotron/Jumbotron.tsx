import Image from 'next/image';
import Mockup from '@/root/assets/jumbotron-mockup.png';

const Jumbotron: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col p-3 md:grid md:grid-cols-2 md:grid-flow-row md:place-items-center">
      <div className="grid justify-items-center md:justify-items-start p-6">
        <h1 className="text-center md:text-left leading-smooth text-3xl xl:text-5xl xl:leading-normal font-bold md:leading-snug md:text-4xl">
          Communicate sensitive
          <br /> announcements the Web3 way
        </h1>
        <p className="md:mt-5 text-center font-regular mt-5 md:text-left md:text-md md:leading-8 xl:text-xl xl:leading-normal">
          With growing number of hacks in the centralized media space, a need
          for web3 solution is needed to safeguard your users.
        </p>
        <button
          className="filter drop-shadow-md mt-5 md:mt-10 pt-4 pb-4 pl-14 pr-14 rounded-full button-green font-bold vrlps-trigger"
          type="button">
          JOIN ME TO WAITLIST
        </button>
      </div>
      <div>
        <Image alt="mockup-screem" src={Mockup} />
      </div>
    </div>
  );
};

export default Jumbotron;
