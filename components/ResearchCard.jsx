import Image from "next/legacy/image";

const ResearchCard = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex flex-col md:flex-row mb-10 md:mb-0 ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
        <p className="text-sm md:text-2xl font-semibold text-primary-darkgreen">{heading}</p>
        <p className="text-sm mt-5 font-light">{text}</p>
      </div>
      <div className="w-full md:w-1/2 md:mx-20 md:my-10 md:p-10">
        <Image className="pt-12" src={imageSrc} width={150} height={100} alt="Card Image"  layout="responsive" />
      </div>
    </div>
  );
};

export default ResearchCard;
