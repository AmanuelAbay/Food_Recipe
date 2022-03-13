const apollo_client = require("../../utils/apollo");
import GET_FAV from '../../../components/graphql/GET_FAV';

const is_fav = async(ID) => {
    let data = await apollo_client.query({
        query: GET_FAV,
        variables: { food_id: ID.food_id, user_id: ID.user_id },
    });
    if (data.data.favorites.length > 0) {
        return 1
    }
    return 0
}

export default is_fav