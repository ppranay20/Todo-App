"use client"

import Todo from "@/components/Todo"
import { useState } from "react"
import { FaMoon } from "react-icons/fa";

export default function App(){
  const [data,setData] = useState({
    title : "",
    isCompleted : false
  })

  return <div className="max-w-screen flex justify-center mt-32">
    <div className="border border-transparent shadow-lg min-w-[400px] px-2 rounded-lg" >
      <div className="flex justify-between items-center">
      <h1 className="font-bold text-xl py-5 px-3">Todo List</h1>
      <div className="p-2">
      </div>
      </div>
      <div className="flex justify-between items-center px-3">
        <input type="text" placeholder="Add a new task..." size={32} className="border border-gray-200 rounded-md px-3 py-2 text-xs" />
        <button className="bg-red-600 text-white rounded-md px-3 py-2 text-xs cursor-pointer">Add</button>
      </div>
      <div>
        <Todo></Todo>
        <Todo></Todo>
      </div>
      <div className="flex justify-between text-xs px-4 py-4 mb-3 text-gray-400">
        <p className="mt-[2px]">2 tasks completed out of 3</p>
        <button className="hover:bg-gray-100 hover:rounded-sm px-2 h-5 hover:text-black">Clear Completed</button>
      </div>
    </div>
  </div>
}