import Image from 'next/legacy/image';
import Link from 'next/link';
import {  FaTwitter,} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="w-full m-auto flex justify-between items-center mr-10">
        <div className="flex relative ml-2 md:ml-12">
          <Link  href="/">
            <Image src="/assets/logoimg.png" width={100} height={100} alt="Card Image"   />
          </Link>
          <p className='py-12 font-semibold text-yellow-950 hidden sm:block'>HydroGeoScienceForWatershedManagement</p>
        </div>
            <Link  href="https://twitter.com/a_ameli2">
              <FaTwitter size={30} color="black"/>
            </Link>
         
      </div>
    </div>
  );
};

export default Footer;
