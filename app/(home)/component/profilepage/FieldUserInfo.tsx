

interface props{
    title1:string;
    title2:string;
    val1:string;
    val2:string;
}

export default function FieldUserInfo({title1,title2,val1,val2}:props) {
  return (
    <div className="border-b-2 border-[#eee] grid grid-cols-1  sm:grid-cols-2 gap-2 p-1 lg:p-2 mt-3 ">
    <div className="w-1/2">
        <h2 className="text-[#ccc] text-lg">{title1}</h2>
        <p className="text-lg mt-1">{val1}</p> 
    </div>
    <div className="w-1/2">
        <h2 className="text-[#ccc] text-lg">{title2}</h2>
        <p className="text-lg mt-1">{val2}</p>
    </div>
</div>
  )
}
