import dbConnection from "@/lib/config/db";
import Todo from "@/lib/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req : NextRequest){
    try{
        await dbConnection();

        const mongoId = await req.json();
        await Todo.findByIdAndDelete(mongoId.id)

        return NextResponse.json({
            success : true,
            message : "Todo Deleted Successfully"
        })
    }catch(err){
        console.log(err);
    }
} 