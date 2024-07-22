import dbConnection from "@/lib/config/db";
import Todo from "@/lib/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req : NextRequest,{params} : {params : {id : string}}){
    try{
        await dbConnection();

        const mongoId = params.id
        await Todo.findByIdAndDelete(mongoId)

        return NextResponse.json({
            success : true,
            message : "Todo Deleted Successfully"
        })
    }catch(err){
        console.log(err);
    }
} 