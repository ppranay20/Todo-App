import { RiDeleteBin6Line } from "react-icons/ri";

interface todoProps{
    title : string,
    isCompleted : boolean,
    id : string,
    deleteTodo : Function,
    updateTodo : Function,
    dark : boolean
}

export default function Todo({title,isCompleted,id,deleteTodo,updateTodo,dark} : todoProps){
    return(
        <div className="grid grid-cols-10 justify-items-start py-2 border bg-gray-100 w-[95%] my-4 rounded-lg m-auto text-sm dark:bg-[#3d3d43] dark:border-[#3d3d43]">
            <div>
                <input onChange={(e) => e.target.checked ? updateTodo(id) : null} type="checkbox" className="col-span-1 h-[14px] w-4 mt-[3px] ml-2 rounded-sm border checked:accent-red-600 checked:hidden dark:checked:accent-black" size={2}   />
            </div>
            <p className= {isCompleted ? "col-span-8 line-through transition-all dark:text-white" : "col-span-8 dark:text-white"}>{title}</p>
            <div onClick={() => deleteTodo(id)} className="col-span-1 cursor-pointer">
                {
                    dark ? <RiDeleteBin6Line size={16} color="white" /> : <RiDeleteBin6Line size={16} />
                }
            </div>
        </div>
    )
}   