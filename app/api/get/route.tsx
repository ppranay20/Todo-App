import dbConnection from "@/lib/config/db";
import { NextResponse } from "next/server";
import Todo from "@/lib/models/todo";

export async function GET(){
    try{
        await dbConnection();

        const todos = await Todo.find({});

        return NextResponse.json({
            success : true,
            todos : todos
        })
    }catch(err){
        console.log(err)
    }
}