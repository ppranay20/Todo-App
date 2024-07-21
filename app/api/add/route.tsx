import dbConnection from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/lib/models/todo";

async function LoadDb(){
    dbConnection();
}

LoadDb();

export async function POST(req : NextRequest){
    try{
        const data = await req.json();
        const newTodo = new Todo({
            title : data.title,
            isCompleted : false
        })

        await newTodo.save();

        return NextResponse.json({
            success : true,
            message :  "Todo Created"
        })
    }catch(err){
        console.log(err)
    }
}