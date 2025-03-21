import Image from "next/legacy/image";
import {FaLinkedin} from 'react-icons/fa';
import Link from "next/link";

const TeamCard = ({ name, position, imagesrc, bio, link }) => {
  //console.log(imagesrc);
  
  return (
   
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/3 2xl:w-1/4 mr-20 pr-24 mt-12 pt-10 pb-12">
        <Image className="p-24 mt-10" src={imagesrc} width={20} height={21} alt="Card Image" layout="responsive" 
        sizes="(max-width: 150px) 100vw,
        (max-height: 150px) 100vw"/>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <p className="text-sm md:text-2xl font-semibold text-primary-darkgreen 2xl:text-6xl ">{name}</p>
        <p className="text-base 2xl:text-4xl mt-7 font-semibold text-primary-darkgreen">{position}</p>
        <p className="text-base mt-3 font-light 2xl:text-3xl 2xl:font-normal">{bio}
        </p>
        {link != undefined  && (
          <div className="text-base py-3">
            <Link href={link} className="text-base">
            <FaLinkedin size={30} color="#0072b1"/>
          </Link>
          </div>
          
        )}
      </div>
     
    </div>
  );
}

export default TeamCard;
