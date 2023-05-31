import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="w-full m-auto flex justify-between items-center py-7">
        <div className="ml-10 font-semibold">
          @2023HWMRC
        </div>
        <ul style={{ color: '#7A7373'}} className="hidden sm:flex font-medium mr-20">
          
          <li className="p-4 transform hover:scale-110 transition duration-500">
            <Link href="https://twitter.com/a_ameli2">
              <FaTwitter size={30} color="black"/>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Footer;
