export default function LaligaCau({name , Img , cont ,MP ,W , D , L , Pts}) {

return (
    <>
<span className="border block"></span>
<div className="flex justify-between">
<div className="flex items-center gap-2">
    <p className="text-center p-1.5  w-6">{cont}</p>
<img className="w-8" src={Img} alt="" />
<h1>{name}</h1>
</div>
<div className="flex gap-7 items-center">
<p className="w-4 text-center">{MP}</p>
<p className="w-3 text-center">{W}</p>
<p className="w-4 text-center">{D}</p>
<p className="w-2 text-center">{L}</p>
<p className="w-5 text-center">{Pts}</p>
</div>
</div>
</>
)
}