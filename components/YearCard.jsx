import Link from "next/link";
import { FaLink} from 'react-icons/fa';
import {RiExternalLinkLine} from 'react-icons/ri';

const YearCard = ({year, data}) => {
    
  return (
    <div className="flex flex-col justify-center px-4 md:px-20 pt-4 md:pt-10">
        <p className="text-lg md:text-2xl 2xl:text-4xl font-semibold text-primary-darkgreen">{year}</p>
        <ol className="text-sm md:text-base  2xl:text-2xl 2xl:tracking-wide font-medium   mt-5 p-4  list-decimal">
        {data.map((item, index) => (
            <Link href={item.link || "#"} key={index}>
                <li className="mb-2">
                  <div className="flex">
                    <p className='mr-2'>{item.title } </p>
                      <div className="transform hover:scale-110 duration-500">
                          <RiExternalLinkLine classname="" size={20} color="#0072b1"/> 
                        </div>
                    </div>
                </li>
        </Link>
      ))}
            </ol>
    </div>
  )
}

export default YearCard;