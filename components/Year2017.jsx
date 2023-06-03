import Link from "next/link";

const Year2017 = () => {
    const data = [
        {link:"https://www.usask.ca/watershed/documents/pdfs/2017/17-11%2520Primary%2520weathering%2520rates,%2520water%2520transit%2520times%2520and%2520concentration-discharge%2520relations.pdf", text:"Ameli, Beven, Erlandsson, Creed, McDonnell & Bishop (2017). Primary weathering rates, water transit times and concentration-discharge relations: A theoretical analysis for the critical zone(link is external), Water Resources Research, 53 (1), 942-960."},
        {link:"https://www.hydrol-earth-syst-sci.net/21/1791/2017/hess-21-1791-2017.pdf", text:" Ameli & Creed (2017). Quantifying hydrologic connectivity of wetlands to surface water systems,(link is external) Hydrology and Earth System Science, 21, 1791–1808."},
        {link:"https://esajournals.onlinelibrary.wiley.com/doi/epdf/10.1002/fee.1504", text:"Golden, Creed, Ali, Basu, Neff, Rains, McLaughlin, Alexander, Ameli, Christensen, Evenson, Jones, Lane & Lang (2017). Integrating geographically isolated wetlands into land management decisions(link is external), Frontiers in Ecology and the Environment, 15 (6), 319–327"},
        {link:"https://www.uwo.ca/biology/faculty/creed/PDFs/Journal%20Articles/120-Serran-et-al-In-Press---Estimating.pdf", text:"Serran, Creed, Ameli, Aldred (2017). Estimating rates of wetland loss using power-law functio(link is external)n, Wetlands, 38(1)"},
        {link:"https://iwaponline.com/hr/article-abstract/48/5/1226/1589/Controls-on-subsurface-transport-of-sorbing?redirectedFrom=fulltext", text:"Ameli (2017). Controls on subsurface transport of sorbing contaminants(link is external), Hydrology Research, 48 (5), 1226-1239."}
    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2017</p>
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

export default Year2017;