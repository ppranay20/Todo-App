import dbConnection from "@/lib/config/db";
import Todo from "@/lib/models/todo";
import { NextRequest,NextResponse } from "next/server";

export async function PUT(req : NextRequest){
    try{
        await dbConnection();

        const {id} = await req.json();
        await Todo.findByIdAndUpdate(id,{
            $set : {
                isCompleted : true}
        });

        return NextResponse.json({
            success : true,
            message : "Task Updated Successfully"
        })
    }catch(err){
        console.log(err);
    }
}