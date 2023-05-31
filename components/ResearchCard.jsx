import Image from "next/image";

const ResearchCard = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex ">
      <div className="w-1/2 flex flex-col justify-center ">
        <p className="text-2xl font-semibold text-primary-darkgreen">{heading}</p>
        <p className="text-base mt-5 font-light">{text}</p>
      </div>
      <div className="w-1/2 h-200  pl-20">
        <Image className="pt-12" src={imageSrc} width={300} height={350} alt="Card Image"  />
      </div>
    </div>
  );
};

export default ResearchCard;
