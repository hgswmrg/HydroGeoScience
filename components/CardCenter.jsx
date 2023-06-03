

const CardCenter = ({ heading, text }) => {
  return (
    <div className="flex items-center ">
      <div className="flex flex-col items-center w-full mt-20 px-20">
        <p className="text-3xl text-primary-darkgreen">{heading}</p>
        <p className="text-base  mt-5 font-light">{text}</p>
      </div>
    </div>
  );
};

export default CardCenter;
