import Image from "next/legacy/image";

const ResearchCard = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-1/2 flex flex-col justify-center ">
        <p className="text-2xl font-semibold text-primary-darkgreen">{heading}</p>
        <p className="text-base mt-5 font-light">{text}</p>
      </div>
      <div className="w-1/2 mx-20 my-10 p-10">
        <Image className="pt-12" src={imageSrc} width={150} height={100} alt="Card Image"  layout="responsive" />
      </div>
    </div>
  );
};

export default ResearchCard;
