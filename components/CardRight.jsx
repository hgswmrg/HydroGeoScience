import Image from "next/legacy/image";

const CardRight = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:ml-20 md:items-start ">
        <p className="text-xl md:text-3xl mb-2 2xl:text-5xl text-primary-darkgreen">{heading}</p>
        <p className="text-sm md:text-base 2xl:text-3xl md:mt-5 font-normal leading-8">{text}</p>
      </div>
      <div className="flex items-center justify-center w-1/2 h-200 m-20 2xl:justify-center pl-20 2xl:p-0 hidden sm:flex">
        <Image className="pt-12 mx-auto" src={imageSrc} width={400} height={450} alt="Card Image" />
      </div>
    </div>
  );
};

export default CardRight;
