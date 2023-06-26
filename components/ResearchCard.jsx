import Image from "next/legacy/image";
import Link from "next/link";

const ResearchCard = ({ imageSrc, heading, text, num }) => {
  return (
    <div className="flex flex-col md:flex-row mb-10  ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
        <div className="flex text-sm md:text-2xl font-semibold text-primary-darkgreen 2xl:text-6xl 2xl:mb-6">
          <p className="text-sm md:text-2xl font-semibold text-primary-darkgreen 2xl:text-6xl ">{heading}</p>
        </div>
        
        <Link href="/publications">
          <p className="text-sm mt-5 font-normal 2xl:text-4xl text-gray-700 ">{text}</p>
        </Link>
      </div>
      <div className="w-full md:w-1/2 md:mx-20 md:my-10 md:p-10 ">
        <Image className="pt-12 " src={imageSrc} width={130} height={70} alt="Card Image"  layout="responsive" />
      </div>
    </div>
  );
};

export default ResearchCard;
