interface PropTypes {
  heading: string;
  paragraph: string;
}

const TextContainer: React.FC<PropTypes> = ({ heading, paragraph }) => {
  return (
    <div className="full-width">
      <div className="container mx-auto md:grid md:grid-cols-2 pt-10 pb-10 md:pt-15 md:pb-15 xl:pb-20 xl:pt-20 pl-4 pr-4">
        <h2 className="text-2xl text-center md:text-left md:text-2xl xl:text-3xl xl:leading-normal md:leading-snug font-bold md:w-10/12">
          {heading}
        </h2>
        <p className="text-center mt-5 xl:mt-1 xl:pt-6 xl:text-xl md:leading-8 lg:text-left">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default TextContainer;
