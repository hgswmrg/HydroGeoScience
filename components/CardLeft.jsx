import Image from "next/image";

const CardLeft = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex ">
      <div className="w-1/2 h-500 mx-20 my-10 ">
        <Image className="pt-12" src={imageSrc} width={500} height={400} alt="Card Image" layout="responsive" />
      </div>
      <div className="w-1/2 flex flex-col justify-center m-20">
        <p className="text-3xl text-primary-darkgreen">{heading}</p>
        <p className="text-base mt-5 font-light">{text}</p>
      </div>
    </div>
  );
};

export default CardLeft;
