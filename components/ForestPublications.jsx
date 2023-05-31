import Link from "next/link";

const ForestPublications = () => {
  return (
    <div className="flex flex-col justify-center px-20 py-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">How do forests and agricultural developments impact water pathways and ultimately stream water quality and quantity?</p>
            <ol className="text-base font-normal  mt-5 p-4  list-decimal">
                <Link href="www.hydrol-earth-syst-sci.net%2F21%2F1791%2F2017%2Fhess-21-1791-2017.pdf">
                    <li>
                    Ameli & Creed (2017). Quantifying hydrologic connectivity of wetlands to surface water systems, Hydrology and Earth System Science, 21, 1791–1808.
                    </li>
                </Link>
                <Link href="https://esajournals.onlinelibrary.wiley.com/doi/epdf/10.1002/fee.1504">
                    <li>
                    Golden, Creed, Ali, Basu, Neff, Rains, McLaughlin, Alexander, Ameli, Christensen, Evenson, Jones, Lane & Lang (2017). Integrating geographically isolated wetlands into land management decisions, Frontiers in Ecology and the Environment, 15 (6), 319–327.
                    </li>
                </Link>
                <Link href="https://www.uwo.ca/biology/faculty/creed/PDFs/Journal%2520Articles/120-Serran-et-al-In-Press---Estimating.pdf">
                    <li>
                    Serran, Creed, Ameli, Aldred (2017). Estimating rates of wetland loss using power-law function, Wetlands, 38(1).
                    </li>
                </Link>
                <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/1752-1688.12690?author_access_token=Lz4tKMAvM04yqjOrMSCrJIta6bR2k8jH0KrdpFOxC65mGquzpMAOXPgzk5Kb3rJry2Zj1DHLWg6hXHesniVh3xa18XGHES3pZ8piUQkXC2u7c45TNN5msNyuBvmDfIi5p6RareaZUBAezDyVjiBlbA==f">
                    <li>
                    Ameli & Creed (2018). Groundwaters at risk: wetland loss changes sources, lengthens pathways, and decelerates rejuvenation of groundwater resources, Journal of the American Water Resources Association, 55(2), 1-13.
                    </li>
                </Link>
                <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/1752-1688.12735?author_access_token=wZRJu8RmQA6V7fB_PCwXiYta6bR2k8jH0KrdpFOxC67svti6dW7QntPXXFnqD1YrsbW3NTX473qASKsGGbAFQOYJ5EsS7R5PtHTauIciEFh0pXhXL2CqmwWH3dtYsD33ETMxU--Aex6uhmdwNjhU_g==">
                    <li>
                    Jones, Ameli, Neff, Evenson, McLaughlin, Golden & Lane (2019). Modeling connectivity of non-floodplain wetlands: Insights, approaches, and recommendations, Journal of the American Water Resources Association, DOI: 10.1111/1752-1688.12735.
                    </li>
                </Link>
                <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/1752-1688.12737?author_access_token=4UcS48lwjIlyEfTVvYGheota6bR2k8jH0KrdpFOxC64ColP7QJsEwY93OJXBzJOi865f68OEfvoiGcnv5oKS88dBQj2Te7GTse5b7gK9KdOxHoHQjvb74baytbhPoiPzzCNS3ZNFbBpigmo3kmxosA==">
                    <li>
                    Ameli & Creed (2019). Does wetland location matter when managing wetlands for watershed-scale flood and drought resilience?, Journal of the American Water Resources Association, 55(3).
                    </li>
                </Link>
            </ol>
    </div>
  )
}

export default ForestPublications