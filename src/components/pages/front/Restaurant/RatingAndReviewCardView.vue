<template>
    <section class="border-t border-3 mt-14">
        <div class="font-bold capitalize text-2xl mt-3">Rating and Review</div>
        <ul class="block space-y-4 mt-5 ml-5">
            <li>
                <div class="flex justify-start items-center">
                    <font-awesome-icon icon="user-circle" class="text-black text-3xl mr-2"></font-awesome-icon>
                    <RatingAndReviewCardViewVue/>
                </div>
            </li>
            <li>
                <div class="flex justify-start items-center">
                    <font-awesome-icon icon="user-circle" class="text-black text-3xl mr-2"></font-awesome-icon>
                    <RatingAndReviewCardViewVue/>
                </div>
            </li>
            <li>
                <div class="flex justify-start items-center">
                    <font-awesome-icon icon="user-circle" class="text-black text-3xl mr-2"></font-awesome-icon>
                    <RatingAndReviewCardViewVue/>
                </div>
            </li>            
        </ul>
    <div class="w-max mt-4 ml-14 mb-10 cursor-pointer capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
    </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import RatingAndReviewCardViewVue from '../cardViews/CommentCardView.vue'
export default {
    components:{
        RatingAndReviewCardViewVue,
        FontAwesomeIcon
    }
}
</script>