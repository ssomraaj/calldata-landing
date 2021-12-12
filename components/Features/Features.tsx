import Icon1 from '@/root/assets/icons/icon-1.png';
import Icon2 from '@/root/assets/icons/icon-2.png';
import Image from 'next/image';

const Features: React.FC = () => {
  return (
    <div className="md:pt-10 md:pb-10 md:mb-10">
      <div className="md:grid md:grid-cols-2 xl:gap-20">
        <div className="filter xl:shadow-lg rounded-2xl p-6 grid grid-cols-9 xl:grid-cols-12">
          <div className="col-span-2 xl:col-span-2">
            <Image alt="group-icon" height={63} src={Icon2} width={63} />
          </div>
          <div className="col-span-7 xl:col-span-10">
            <h2 className="font-bold text-xl">Decentralized & Trustless</h2>
            <p className="xl:text-xl pt-4">
              Marketing communications & interactions happen onchain
            </p>
          </div>
        </div>
        <div className="filter xl:shadow-lg rounded-2xl p-6 grid grid-cols-9 xl:grid-cols-12">
          <div className="col-span-2  xl:col-span-2">
            <Image alt="blockchain-icon" height={63} src={Icon1} width={63} />
          </div>
          <div className="col-span-7  xl:col-span-10">
            <h2 className="font-bold text-xl">Inter-Protocol Communication</h2>
            <p className="xl:text-xl pt-4">
              Enabling interaction between POP3, IMAP & blockchain protocols
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
