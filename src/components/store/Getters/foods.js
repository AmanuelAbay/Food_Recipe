import apollo_client from "../../utils/apollo"
import FILTER_FOOD from "../../../components/graphql/FILTER_FOOD"
import ALL_FOOD from "../../../components/graphql/fetch_foods"

export default async function food_filter(category = "all") {
    let FOODS = "fetching_query";
    if (category === "all") {
        FOODS = await apollo_client.query({
            query: ALL_FOOD
        })
    } else {
        FOODS = await apollo_client.query({
            query: FILTER_FOOD,
            variables: {
                category: category
            }
        })
    }
    return FOODS.data.foods;

}