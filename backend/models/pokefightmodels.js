import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pokefightSchema = new Schema(
  {
    name: {
      english: { type: String, required: true },
      japanese: { type: String, required: true },
      chinese: { type: String, required: true },
      french: { type: String, required:true }
    },
    type:[{type:String ,required:true}],
    base:{
        HP:{type:Number ,required:true},
        Attack:{type:Number ,required:true},
        Defense:{type:Number ,required:true},
        "Sp. Attack":{type:Number ,required:true},
        "Sp. Defense":{type:Number ,required:true},
        Speed:{type:Number ,required :true}
    }
  }, 
  { collection:"pokefights" }
);

const Pokefight = model("Pokefight", pokefightSchema);
export default Pokefight;
