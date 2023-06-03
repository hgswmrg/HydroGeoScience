import Link from "next/link";

const Year2019 = () => {
    const data = [
        {link:"", text:"Ameli & Creed (2019). Does wetland location matter when managing wetlands for watershed-scale flood and drought resilience?, Journal of the American Water Resources Association, 55 (3), 529-542"},
        {link:"", text:"Jones, Ameli, Neff, Evenson,  McLaughlin, Golden & Lane (2019). Modeling connectivity of  non-floodplain wetlands: Insights, approaches, and recommendations, Journal of the American Water Resources Association, 55 (3), 559-577"},
        

    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2019</p>
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

export default Year2019;