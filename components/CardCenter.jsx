

const CardCenter = ({ heading, text }) => {
  return (
    <div className="flex items-center ">
      <div className="flex flex-col items-center w-full mt-20 px-4 md:px-20">
        <p className="text-xl md:text-3xl 2xl:text-5xl text-primary-darkgreen mb-1 ">{heading}</p>
        <p className="text-sm text-center 2xl:px-96 md:text-base 2xl:text-3xl mt-1 font-normal leading-8">{text}</p>
      </div>
    </div>
  );
};

export default CardCenter;
