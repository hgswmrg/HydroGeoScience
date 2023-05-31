import Image from "next/image";

const TeamCard = ({ name, position, imagesrc, bio }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/3">
        <Image className="pt-12" style={{ maxHeight: '400px', maxWidth: "250px" }} src={imagesrc} width={300} height={200} alt="Card Image" layout="responsive" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <p className="text-2xl mt-10 font-bold text-primary-darkgreen">{name}</p>
        <p className="text-base mt-7 font-semibold text-primary-darkgreen">{position}</p>
        <p className="text-base mt-3 font-light">{bio}</p>
      </div>
    </div>
  );
}

export default TeamCard;
