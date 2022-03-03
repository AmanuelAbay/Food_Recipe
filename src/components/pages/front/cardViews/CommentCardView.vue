<template>
    <div class="w-max card bg-black hover:shadow-lg mr-5">
        <div class="flex justify-between items-center">
            <div class="capitalize font-bold pl-2 pt-1">Dr.chala Chala</div>
            <div class="pr-6">
                <star-rating :inline="true" :star-size="22.5" active-color="#FF7F3F" :read-only="true" :show-rating="false" :rating="3"></star-rating>
            </div>
        </div>
        <div class="p-2">
            Lorem ipsum dolor sit lasdlkajsdf aljdf lksjf l ajdfk kaljdf a jfkas lasjdfkla kadsjfk kasdjf kddjfk slkjf  lajdfoaljdf lakjdfaj lakjf amet consectetur adipisicing 🤣😂. comments will be down here
        </div>
    </div>
</template>
<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import StarRating from 'vue-star-rating'
export default {
    components:{
        // FontAwesomeIcon,
        StarRating
    },
    data(){
        return {
            rating:3.2
        }
    }
}
</script>