import Link from "next/link";

const Year2022 = () => {
    const data = [
        {link:"http://weebly-file/1/2/4/1/124112840/a_statistical_approach_for_identifying_factors_governing_streamflow_recession_behaviour.pdf", text:"Li and Ameli (2022). A statistical approach for identifying factors governing streamflow recession behaviour(link is external). Hydrological Processes 36:e14718"},
        
    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2022</p>
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

export default Year2022;