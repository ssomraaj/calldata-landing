import Bloomberg from '@/root/assets/bloomberg.png';
import Image from 'next/image';
import Insider from '@/root/assets/business-insider.png';
import MarketWatch from '@/root/assets/market-watch.png';
import TechCrunch from '@/root/assets/tech-crunch.png';

const PressRelease: React.FC = () => {
  return (
    <div className="md:pt-10 md:mb-10 mb-10 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Image
          alt="bloomberg"
          height={200}
          objectFit="contain"
          src={Bloomberg}
        />
        <Image
          alt="market-watch"
          height={200}
          objectFit="contain"
          src={MarketWatch}
        />
        <div className="xl:p-2 xl:mt-11">
          <Image
            alt="business-insider"
            height={80}
            objectFit="contain"
            src={Insider}
          />
        </div>
        <div className="xl:p-2 xl:mt-8">
          <Image
            alt="tech-crunch"
            height={80}
            objectFit="contain"
            src={TechCrunch}
          />
        </div>
      </div>
    </div>
  );
};

export default PressRelease;
