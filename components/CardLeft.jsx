import Image from "next/legacy/image";

const CardLeft = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex flex-col md:flex-row 2xl:mb-40">
      <div className="md:w-1/2 h-500 m-12 md:ml-28 mr-16 my-10 md:pr-20">
        <Image className="pt-12" src={imageSrc} width={400} height={200} alt="Card Image" layout="responsive" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:items-start md:pr-12">
        <p className="text-xl md:text-3xl 2xl:text-5xl mb-2 text-primary-darkgreen">{heading}</p>
        <p className="text-sm md:text-base 2xl:text-3xl mt-5 font-normal leading-8">{text}</p>
      </div>
    </div>
  );
};

export default CardLeft;
