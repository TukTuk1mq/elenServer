import clothes from "./json";

const findClothById = (id) => {
  return clothes.find(cloth => cloth.id === parseInt(id));
};

export default findClothById;
