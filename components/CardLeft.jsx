import Image from "next/legacy/image";

const CardLeft = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:w-1/2 h-500 m-12 md:ml-28 mr-16 my-10 md:pr-20">
        <Image className="pt-12" src={imageSrc} width={500} height={400} alt="Card Image" layout="responsive" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:items-start md:pr-12">
        <p className="text-xl md:text-3xl text-primary-darkgreen">{heading}</p>
        <p className="text-sm md:text-base mt-5 font-light">{text}</p>
      </div>
    </div>
  );
};

export default CardLeft;
