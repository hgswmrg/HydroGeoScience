import Link from "next/link";

const Year2018 = () => {
    const data = [
        {link:"https://onlinelibrary.wiley.com/doi/epdf/10.1111/1752-1688.12690?author_access_token=Lz4tKMAvM04yqjOrMSCrJIta6bR2k8jH0KrdpFOxC65mGquzpMAOXPgzk5Kb3rJry2Zj1DHLWg6hXHesniVh3xa18XGHES3pZ8piUQkXC2u7c45TNN5msNyuBvmDfIi5p6RareaZUBAezDyVjiBlbA==", text:"Ameli, Gabrielli, Morgenstern & McDonnell (2018). Groundwater subsidy from headwaters to their parent watershed: A combined field‐modeling approach, Water Resources Research, 54(7)"},
        {link:"", text:"Ameli & Craig (2108). Semi-Analytical 3D solution for assessing radial collector well pumping impacts on groundwater-surface water interaction, Hydrology Research, 49 (1)"},
        {link:"", text:"•  Ameli & Creed (2018). Groundwaters at risk: wetland loss changes sources, lengthens pathways, and decelerates rejuvenation of groundwater resources(link is external), Journal of the American Water Resources Association, 55 (2), 294-306."},
        
    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2018</p>
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

export default Year2018;