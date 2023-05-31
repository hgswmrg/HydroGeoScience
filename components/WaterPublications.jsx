import Link from "next/link";

const WaterPublications = () => {
  return (
    <div className="flex flex-col justify-center px-20 py-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">Where does the water go after it rains?</p>
        <ol className="text-base font-normal  mt-5 p-4  list-decimal">
                <Link href="https://www.sciencedirect.com/science/article/abs/pii/S030917081300119X">
                    <li>
                    Ameli, Craig & Wong (2013). Series solutions for saturated-unsaturated flow in multi-layer unconfined aquifers, Advances in Water Resources, 60: 24-33
                    </li>
                </Link>
                <Link href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014WR015394">
                    <li>
                        ​Ameli & Craig (2014). Semi-analytical series solutions for three dimensional groundwater-surface water interaction, Water Resources Research, 50 (5)
                    </li>
                </Link>
                <Link href="https://iwaponline.com/hr/article/47/6/1104/1228/Performance-assessment-of-low-order-versus-high">
                    <li>
                    Ameli & Abedini (2015). Performance assessment of low-order versus high-order numerical schemes in numerical simulation of aquifer flow, Hydrology Research, 47(6), 1104-1115
                    </li>
                </Link>
                <Link href="https://www.usask.ca/watershed/documents/pdfs/2015/15-23%2520Ameli_et_al_2015_WRR.pdf">
                    <li>
                    Ameli, Craig & McDonnell (2015). Are all runoff processes the same? Numerical experiments comparing Darcy-Richards to an overland flow-based approach for subsurface storm runoff simulation, Water Resources Research, 51 (12)
                    </li>
                </Link>
                <Link href="https://www.usask.ca/watershed/documents/pdfs/2016/16-20%2520HP-Ameli%2520et%2520al%2520%25202016.pdf">
                    <li>
                    Ameli, McDonnell & Bishop (2016). The exponential decline in saturated hydraulic conductivity with depth: A novel method for exploring its effect on water flow paths and transit time distribution, Hydrological Processes, 30 (14)​
                    </li>
                </Link>
                <Link href="">
                    <li>
                    Ameli & Craig (2018). Semi-Analytical 3D solution for assessing radial collector well pumping impacts on groundwater-surface water interaction, Hydrology Research, 49 (1)​
                    </li>
                </Link>
                <Link href="">
                    <li>
                    Ameli, Gabrielli, Morgenstern & McDonnell (2018). Groundwater subsidy from headwaters to their parent watershed: A combined field‐modeling approach, Water Resources Research, 54(7).
                    </li>
                </Link>
                <Link href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021WR030263">
                    <li>
                    Janssen, J., & Ameli, A. A. (2021). A hydrologic functional approach for improving large-sample hydrology performance in poorly gauged regions. Water Resources Research, 57, e2021WR030263. https://doi.org/10.1029/2021WR030263
                    </li>
                </Link>
                <Link href="">
                    <li>
                    Janssen J, Radić V and Ameli A (2021) Assessment of Future Risks of Seasonal Municipal Water Shortages Across North America. Front. Earth Sci. 9:730631. doi: 10.3389/feart.2021.730631
                    </li>
                </Link>
                <Link href="http://weebly-file/1/2/4/1/124112840/a_statistical_approach_for_identifying_factors_governing_streamflow_recession_behaviour.pdf">
                    <li>
                    Li, H., & Ameli, A. A. (2022) A statistical approach for identifying factors governing streamflow recession behaviour. Hydrological Processes, 36:e14718
                    </li>
                </Link>
            </ol>
    </div>
  )
}

export default WaterPublications