import Image from "next/legacy/image";

const CardRight = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col ">
      <div className="w-1/2 flex flex-col justify-center mx-20">
        <p className="text-3xl text-primary-darkgreen">{heading}</p>
        <p className="text-base mt-5 font-light">{text}</p>
      </div>
      <div className="w-1/2 h-200 m-20 pl-20">
        <Image className="pt-12" src={imageSrc} width={300} height={350} alt="Card Image"  />
      </div>
    </div>
  );
};

export default CardRight;
