import Image from "next/legacy/image";

const CardRight = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:ml-20 md:items-start ">
        <p className="text-xl md:text-3xl text-primary-darkgreen ">{heading}</p>
        <p className="text-sm md:text-base mt-5 font-light">{text}</p>
      </div>
      <div className="w-1/2 h-200 m-20 pl-20 hidden sm:block">
        <Image className="pt-12" src={imageSrc} width={300} height={350} alt="Card Image"  />
      </div>
    </div>
  );
};

export default CardRight;
