import mongoose from "mongoose";
import { getAllData, getDataById, getByIdByInfo } from "../Services/queries/queries.js";

const getAllPokefights = async (req, res, next) => {
  try {
    const result = await getAllData();
    if (result.length === 0) {
      throw { status: 404, message: "No pokefight found" };
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getPokefightById = async (req, res, next) => {
  try {
     const { id } = req.params;
     if (!mongoose.Types.ObjectId.isValid(id)) {
        throw { status:400 ,message:"Invalid ObjectId"};
     }
     const result= await getDataById(id);
     if (!result){
        throw{status :404 ,message:"Pokefight not found"};
     }
       res.status(200).json({status :"success",code :200,data:result});
   }catch(err){
       next(err);
   }
};

const getPokefightInfoById = async(req,res,next)=>{
   try{
       const{id ,info}=req.params;
       if(!mongoose.Types.ObjectId.isValid(id)){
           throw{status :400,message :"Invalid ObjectId"};
       }
         if(!["type","name","base"].includes(info)){
            throw{status :400,message :"Bad Request. Wrong type"};
        }
          const result=await getByIdByInfo(id ,info);
          if(!result){
             throw{status :404,message :"Pokefight not found"};
          }
           res.status(200).json({status:"success",code :200,data:result});
    }catch(err){
        next(err);
   }
};

export { getAllPokefights, getPokefightById, getPokefightInfoById };