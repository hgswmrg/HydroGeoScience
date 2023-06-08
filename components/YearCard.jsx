import Link from "next/link";

const YearCard = ({year, data}) => {
    
  return (
    <div className="flex flex-col justify-center px-4 md:px-20 pt-4 md:pt-10">
        <p className="text-lg md:text-2xl font-semibold text-primary-darkgreen">{year}</p>
        <ol className="text-sm md:text-base font-normal  mt-5 p-4  list-decimal">
        {data.map((item, index) => (
            <Link href={item.link}>
            <li>
                {item.title}
            </li>
            </Link>
      ))}
            </ol>
    </div>
  )
}

export default YearCard;