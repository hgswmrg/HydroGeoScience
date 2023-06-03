import Link from "next/link";

const Year2013 = () => {
    const data = [
        {link:"https://www.sciencedirect.com/science/article/pii/S030917081300119X", text:"Ameli, Craig & Wong (2013). Series solutions for saturated–unsaturated flow in multi-layer unconfined aquifers(link is external), Advances in Water Resources, 60: 24-33."}
    ]
  return (
    <div className="flex flex-col justify-center px-20 py-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2013</p>
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

export default Year2013;