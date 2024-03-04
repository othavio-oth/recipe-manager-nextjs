import { services } from "@/domain/services";

 const Ingredients = async ()=>{
    const ingredients = await services().ingredients.list();
    return(
        ingredients?.map((ingredient)=>{
            return (
                <h1>{ingredient.name}</h1>
            );
        })
    )
}
export default Ingredients;