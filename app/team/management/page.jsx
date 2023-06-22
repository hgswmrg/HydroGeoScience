import TeamCard from '@components/TeamCard'
import Image from "next/legacy/image";
import { getProfile } from '@backend/sanity-utils';

export default async function Graduates () {
  
  const teamData = await getProfile();

  

  const filteredProfileData = (classification) => {
    return teamData.filter((profileItem) => profileItem.profileType === classification);
  };

  return (
    <section className="w-full h-screen h-full flex flex-col items-center md:items-start mb-20">
         <div className="relative w-full pb-96">
        <Image
          src="/assets/TeamImage.png"
          alt="TeamPageImage"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="h-600"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-bold text-5xl 2xl:text-7xl mb-5 text-white">
            Meet the Team
          </p>
        </div>
      </div>
      <div className="mx-20">
        
        <p className="mt-24 font-bold text-3xl 2xl:text-6xl  text-primary-darkgreen">Lab Management</p>
        <hr className="mt-2 w-full h-0.5 bg-primary-darkblue" />
        {filteredProfileData('director').map((profileItem) => (
          <TeamCard link={profileItem.linkedIn} name={profileItem.name} imagesrc={profileItem.image} bio={profileItem.description} position={profileItem.position}/>
        ))}
        
        </div>

    </section>
  )
}

