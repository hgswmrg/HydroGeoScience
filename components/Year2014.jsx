import Link from "next/link";

const Year2014 = () => {
    const data = [
        {link:"https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014WR015394", text:"Ameli  &  Craig (2014). Semi-analytical series solutions for three dimensional groundwater-surface water interaction(link is external), Water Resources Research, 50 (5)."}
    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2014</p>
        <ol className="text-base font-normal  mt-5 p-4  list-decimal">
        {data.map((item, index) => (
            <Link href={item.link}>
            <li>
                {item.text}
            </li>
            </Link>
      ))}
            </ol>
    </div>
  )
}

export default Year2014;