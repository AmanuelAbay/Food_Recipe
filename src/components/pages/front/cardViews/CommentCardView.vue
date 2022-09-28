<template>
    <div class="w-max card bg-black hover:shadow-lg mr-5">
        <div class="flex justify-between items-center">
            <div class="capitalize font-bold pl-2 pt-1">{{userName}}</div>
            <div class="pr-6 pl-4" v-if="rating!==0">
                <star-rating :inline="true" :star-size="18.5" active-color="#FF7F3F" :increment="0.5" :read-only="true" :show-rating="false" :rating="rating"></star-rating>
            </div>
        </div>
        <div class="p-2">
            {{comment}}
        </div>
    </div>
</template>
<script>
import StarRating from 'vue-star-rating';
export default {
    // props: ['comment', 'userName', 'userId', 'food'],
    props: {
        comment:String,
        userName:String,
        userId:Number,
        food: {
        type: Object,
        default: () => ({}),
        },
    },
    components:{
        // FontAwesomeIcon,
        StarRating
    },
    data(){
        return {
            rating: this.rate()
        }
    },
    methods:{
        rate(){
        if(this.food.rates.find(rate => rate.rate_user_id === this.userId))
          return this.food.rates.find(rate => rate.rate_user_id === this.userId).value
        else return 0

      }
    },
    mounted(){
    }
}
</script>