
import { useEffect  ,  useState} from "react"


export default function Homeed() {

const [product , setproduct] = useState([])

useEffect(() => {
  fetch('https://apiv3.apifootball.com/?action=get_countries&APIkey=179348afd14a963ed80acd9a07dfefb21448058c6e8e8cf220f06a2409d68f28')
  .then(res=> res.json())
  .then(json=> setproduct(json))

} , [])


return (
  <>
<div className="grid grid-cols-4 gap-4 justify-center items-center">
{ 
product.map(itme => (
<>
  <div key={itme.country_id} className="flex flex-col justify-center items-center">
<img className="w-20 h-10" src={itme.country_logo} alt="No IMG" />
  <h1 className="line-clamp-1 text-center">{itme.country_name}</h1>
  </div>

</>
)
)}
</div>
    </>
  )
}


