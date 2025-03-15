import { useEffect, useState } from "react"

export default function LeagueS () {
const [product , setproduct] = useState([])

useEffect(() => {
fetch("https://apiv3.apifootball.com/?action=get_leagues&country_id=6&APIkey=179348afd14a963ed80acd9a07dfefb21448058c6e8e8cf220f06a2409d68f28")
.then(res => res.json())
.then(json => setproduct(json))

} , [] )

    return (
        <>
        {product.map(itme => (
            <div className="flex flex-col items-center justify-center p-4 " key={itme.country_id}>
<img className="w-20 h-20" src={itme.league_logo} alt="No IMG" />
<h1 className="line-clamp-1 text-center">{itme.league_name}</h1>

            </div>
        ))}
        </>
)
}