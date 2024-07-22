"use client"

import Todo from "@/components/Todo"
import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface todo{
  _id : string, 
  title : string,
  isCompleted : boolean
}

export default function App(){
  const [title,setTitle] = useState<string>("");
  const [data,setData] = useState<Array<todo>>([]);
  const [dark,setDark] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    setDark(!dark);
  }

  const fetchData = async () => {
    try{
      const res = await axios.get("/api/get");
      const todos = res.data.todos;
      setData(todos);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const addTodo = async (e : any) => {
    e.preventDefault();
    try{
      const res = await axios.post("/api/add",{title : title , isCompleted : false})
      setTitle("");
      toast.success("Todo Added",{
        position : "top-center",
        theme : dark ? "dark" : "light"
      })
      fetchData();
    }catch(err){
      console.log(err);
    }
  }

  const deleteTodo = async (id : string) => {
    try{
        const res = await axios.delete(`/api/delete/${id}`);
        fetchData();
    }catch(err){
        console.log(err)
    }
  }

  const updateTodo = async (id : string) => {
    try{
      const res = await axios.put('/api/update',{id : id})
      fetchData()
    }catch(err){
      console.log(err);
    }
  }

  const clearCompleted = async() => {
    try{
      const res = await axios.post('/api/clear');
      if(res.data.success){
        fetchData()
      }
    }catch(err){
      console.log(err)
    }
  }
  
  return <div className="w-screen h-screen dark:bg-[#0f0f10] overflow-x-hidden">
    <div className="max-w-screen flex relative top-20 justify-center items-center">
      <div className="border border-transparent shadow-lg min-w-[400px] px-2 rounded-lg dark:bg-[#18181b]" >
        <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl py-5 px-3 dark:text-white">Todo List</h1>
        <div className="p-2">
        </div>
        <div className="px-5 cursor-pointer" onClick={toggleDarkMode}>
        {
          dark ? <CiSun size={24} color="white"/>  : <FaMoon size={24} />
        }
        </div>
        </div>
        <form onSubmit={addTodo} className="flex justify-between items-center px-3">
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add a new task..." size={32} className="border border-gray-200 rounded-md px-3 py-2 text-sm outline-none dark:border-[#0f0f10] dark:bg-[#0f0f10] dark:text-white" />
          <button className="bg-red-600 text-white rounded-md px-3 py-2 text-xs cursor-pointer dark:bg-[#e7e6e7] dark:text-black">Add</button>
        </form>
        <div>
          {
            data.map((item,index) => {
              return <Todo title={item.title} id = {item._id} isCompleted={item.isCompleted} dark={dark} deleteTodo={deleteTodo} updateTodo={updateTodo} key={index}></Todo>
            })
          }
        </div>
      </div>
    </div>
    <ToastContainer theme={dark ? "dark" : "light"} />
  </div>
}