import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="w-full m-auto flex justify-between items-center py-7 mr-10">
        <div className="ml-10 font-semibold">
          @2023HWMRC
        </div>
        
            <Link  href="https://twitter.com/a_ameli2">
              <FaTwitter size={30} color="black"/>
            </Link>
         
      </div>
    </div>
  );
};

export default Footer;
