import Link from "next/link";

const Year2021 = () => {
    const data = [
        {link:"https://scholar.google.com/citations?user=L6LeKWcAAAAJ&hl=en", text:"Janssen and Ameli (2021). A hydrologic functional approach for improving large-sample hydrology performance in poorly gauged regions. Water Resources Research, 57 (9)"},
        {link:"https://scholar.google.com/citations?user=L6LeKWcAAAAJ&hl=en", text:"Ameli, Laudon, Teutschbein and Bishop (2021). Where and when to collect tracer data to diagnose hillslope permeability architecture? Water Resources Research, 57 (8)"},
        {link:"https://www.frontiersin.org/articles/10.3389/feart.2021.730631/full", text:"anssen, Radic, Ameli (2021).  Assessment of future risks of seasonal municipal water shortages across North America.Frontiers in Earth Science."},
        {link:"https://scholar.google.com/citations?user=L6LeKWcAAAAJ&hl=en", text:"McDonnell, Gabrielli, Ameli, Ekanayake, Fenicia, Freer, Graham, McGlynn, Morgenstern, and Pietroniro (2021). The Maimai M8 experimental catchment database: Forty years of process‐based research on steep, wet hillslopes, Hydrological Processes, 35 (5)"},
       
      
    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2021</p>
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

export default Year2021;