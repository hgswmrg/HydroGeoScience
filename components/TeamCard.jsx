import Image from "next/legacy/image";
import {FaLinkedin} from 'react-icons/fa';
import Link from "next/link";

const TeamCard = ({ name, position, imagesrc, bio, link }) => {
  
  
  return (
   
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/3 mr-20 pr-24 mt-12 pt-10 pb-12">
        <Image className="p-24 mt-10" src={imagesrc} width={50} height={50} alt="Card Image" layout="responsive" 
        sizes="(max-width: 150px) 100vw,
        (max-height: 150px) 100vw"/>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <p className="text-2xl mt-10 font-bold text-primary-darkgreen">{name}</p>
        <p className="text-base mt-7 font-semibold text-primary-darkgreen">{position}</p>
        <p className="text-base mt-3 font-light">{bio}
        </p>
      </div>
      {link != undefined  && (
          <div className="text-base">
            <FaLinkedin size={30} color="black"/>
            <Link href={link} className="text-base">
            <FaLinkedin size={30} color="black"/>
          </Link>
          </div>
          
          
        )}
    </div>
  );
}

export default TeamCard;
