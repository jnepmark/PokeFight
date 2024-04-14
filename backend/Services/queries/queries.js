import Pokefight from "../../models/pokefightModels.js";

const getAllData = async () => {
  return Pokefight.find();
};

const getDataById = (id) => {
  return Pokefight.findById(id);
};

const getByIdByInfo = (id, info) => {
  return Pokefight.findById(id, { [info]: 1 });
};
 

 export { getAllData, getDataById, getByIdByInfo };