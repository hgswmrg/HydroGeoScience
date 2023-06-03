import Link from "next/link";

const Year2020 = () => {
    const data = [
        {link:"", text:"Arsenault, Brissette, Martel, Troin, Lévesque, Davidson-Chaput, Gonzalez, Ameli,  Poulin (2020). A comprehensive, multisource database for hydrometeorological    modeling of 14,425 North American watersheds, Nature Scientific Data, 7(1), 1-12"},
        {link:"", text:"Erlandsson, Sverdrup, Bishop, Belyazid, Ameliand Köhler (2020). Catchment export of base cations: Improved mineral dissolution kinetics influence the role of water transit time, Soil, 6, 231–244"},
        

    ]
  return (
    <div className="flex flex-col justify-center px-20 pt-10">
        <p className="text-2xl font-semibold text-primary-darkgreen">2020</p>
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

export default Year2020;