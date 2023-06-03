import Link from "next/link";

const Year2016 = () => {
    const data = [
        {link:"https://www.usask.ca/watershed/documents/pdfs/2016/16-20%20HP-Ameli%20et%20al%20%202016.pdf", text:"Ameli, McDonnell & Bishop (2016). The exponential decline in saturated hydraulic conductivity with depth: A novel method for exploring its effect on water flow paths and transit time distribution(link is external), Hydrological Processes, 30 (14)."},
        {link:"https://www.usask.ca/watershed/documents/pdfs/2016/16-21%20s2.0-S0022169416302682-main.pdf", text:"Ameli, Amvrosiadi, Grabs, Creed, Laudon, McDonnell & Bishop (2016). Hillslope permeability architecture controls on subsurface transit time distribution and flow paths(link is external), Journal of Hydrology, 543, 17-30."},
    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2016</p>
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

export default Year2016;