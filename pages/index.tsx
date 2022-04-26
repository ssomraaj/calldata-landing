import Features from '@/root/components/Features/Features';
import Jumbotron from '@/root/components/Jumbotron/Jumbotron';
import TextContainer from '@/root/components/shared/TextContainer/TextContainer';

/**
 * @description
 * This is the home page of the CallData application.
 */

const Index: React.FC = () => {
  return (
    <>
      <Jumbotron />
      <Features />
      {/* <TextContainer
        heading="Why use web2 technologies to promote your web3 app ?"
        paragraph="With CallData now you can engage your smart contract interactors directly leveraging technologies like ENS"
      />
      <TextContainer
        heading="Worried about Higher Gas Costs ?"
        paragraph="We're working on minimizing gas costs to make sure onchain campaigns are cheaper than traditional email"
      /> */}
    </>
  );
};

export default Index;
