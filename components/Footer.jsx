import Image from 'next/legacy/image';
import Link from 'next/link';
import {  FaTwitter, } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="w-full m-auto flex justify-between items-center mr-10">
        <div className="flex ml-2 md:ml-12">
          <Link  href="/">
            <Image src="/assets/footer.png" width={160} height={100} alt="Card Image"   />
          </Link>
          <div className="flex items-center justify-center flex-col py-6 font-medium hidden sm:block text-center">
            <p>HydroGeoScience For Watershed Management Laboratory</p>
            <p>The University of British Columbia (Vancouver Campus)</p>
          </div>
        </div>
        <div className="flex ">
          <Link href="https://github.com/hgwm" className='mr-10 transform hover:scale-110 duration-500'>
            <AiFillGithub size={30} color="black"/>
          </Link>
          <Link  classname="transform hover:scale-110 duration-500" href="https://twitter.com/a_ameli2">
            <FaTwitter size={30} color="black"/>
          </Link>
        </div>
            
         
      </div>
    </div>
  );
};

export default Footer;
