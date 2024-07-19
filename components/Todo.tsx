import { RiDeleteBin6Line } from "react-icons/ri";

export default function Todo(){
    return(
        <div className="grid grid-cols-10 justify-items-start py-3 border bg-gray-100 w-[95%] my-4 rounded-lg m-auto text-sm">
            <input type="checkbox" className="col-span-1 h-[14px] w-4 mt-[3px] ml-1 rounded-sm border checked:accent-red-600" size={2}   />
            <p className="col-span-8">Thos osdwi </p>
            <div className="col-span-1 cursor-pointer ">
                <RiDeleteBin6Line size={16} />
            </div>
        </div>
    )
}   