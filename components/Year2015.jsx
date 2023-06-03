import Link from "next/link";

const Year2015 = () => {
    const data = [
        {link:"https://www.usask.ca/watershed/documents/pdfs/2015/15-23%20Ameli_et_al_2015_WRR.pdf", text:"Ameli, Craig & McDonnell (2015). Are all runoff processes the same? Numerical experiments comparing Darcy-Richards to an overland flow-based approach for subsurface storm runoff simulation(link is external), Water Resources Research, 51 (12)."},
        {link:"https://iwaponline.com/hr/article-abstract/47/6/1104/1228/Performance-assessment-of-low-order-versus-high?redirectedFrom=fulltext", text:"Ameli &  Abedini (2015). Performance assessment of low-order versus high-order numerical schemes in numerical simulation of aquifer flow(link is external), Hydrology Research, 47(6), 1104-1115​."}
    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2015</p>
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

export default Year2015;