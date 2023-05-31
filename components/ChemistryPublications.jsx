import Link from "next/link";

const ChemistryPublications = () => {
  return (
    <div className="flex flex-col justify-center px-20 py-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">How does chemistry of rainwater alter on its way from being rainfall to being streamflow?</p>
            <ol className="text-base font-normal  mt-5 p-4  list-decimal">
                <Link href="https://www.usask.ca/watershed/documents/pdfs/2016/16-21%2520s2.0-S0022169416302682-main.pdf">
                    <li>
                    Ameli, Amvrosiadi, Grabs, Creed, Laudon, McDonnell & Bishop (2016). Hillslope permeability architecture controls on subsurface transit time distribution and flow paths, Journal of Hydrology, 543, 17-30
                    </li>
                </Link>
                <Link href="https://iwaponline.com/hr/article/48/5/1226/1589/Controls-on-subsurface-transport-of-sorbing">
                    <li>
                    ​Ameli (2017). Controls on subsurface transport of sorbing contaminants, Hydrology Research, 48 (5), 1226-1239
                    </li>
                </Link>
                <Link href="https://www.usask.ca/watershed/documents/pdfs/2017/17-11%2520Primary%2520weathering%2520rates,%2520water%2520transit%2520times%2520and%2520concentration-discharge%2520relations.pdf">
                    <li>
                    Ameli, Beven, Erlandsson, Creed, McDonnell & Bishop (2017). Primary weathering rates, water transit times and concentration-discharge relations: A theoretical analysis for the critical zone, Water Resources Research, 53 (1), 942-960.
                    </li>
                </Link>
                <Link href="https://www.usask.ca/watershed/documents/pdfs/2015/15-23%2520Ameli_et_al_2015_WRR.pdf">
                    <li>
                    Erlandsson, Sverdrup, Bishop, Belyazid, Ameli & Köhler (2020). Catchment export of base cations: Improved mineral dissolution kinetics influence the role of water transit time, 6, 231-244.
                    </li>
                </Link>
                <Link href="https://www.usask.ca/watershed/documents/pdfs/2016/16-20%2520HP-Ameli%2520et%2520al%2520%25202016.pdf">
                    <li>
                    Ameli, A. A., Laudon, H., Teutschbein, C., & Bishop, K. (2021). Where and when to collect tracer data to diagnose hillslope permeability architecture. Water Resources Research, 57, e2020WR028719. https://doi.org/10.1029/2020WR028719
                    </li>
                </Link>
            </ol>
    </div>
  )
}

export default ChemistryPublications