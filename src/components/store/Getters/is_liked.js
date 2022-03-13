const apollo_client = require("../../utils/apollo");
// const GET_LIKE = require("../../../components/graphql/GET_LIKE");
import GET_LIKE from '../../../components/graphql/GET_LIKE';

const is_liked = async(ID) => {
    let data = await apollo_client.query({
        query: GET_LIKE,
        variables: { food_id: ID.food_id, user_id: ID.user_id },
    });
    if (data.data.likes.length > 0) {
        return 1
    }
    return 0
}

export default is_liked