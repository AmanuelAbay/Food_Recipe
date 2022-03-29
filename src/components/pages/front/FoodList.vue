<template>
<div>
    <body class="pr-5 pl-14">
        <div class="pt-6">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2" @click="callingGetters()">Foods</h4>
        </div>
        <!-- list of card views will be displayed -->
         <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="food in foods" :key="food.id">
                    <food-card-view-vue :food="food"></food-card-view-vue>
            </div>
        </div>
        <!-- <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div> -->
    </body>
</div>
</template>

<script>
import FoodCardViewVue from "./cardViews/FoodCardView.vue";
import ALL_FOODS from "../../graphql/fetch_foods.js"
// import food from "../../store/Getters/foods.js"
import FILTER_FOOD from "../../graphql/FILTER_FOOD.js"
import SEARCH_FOOD from "../../graphql/SEARCH_FOOD.js"
// import apollo_client from "../../utils/apollo"
import {mapActions} from 'vuex';
import { mapState } from 'vuex';
export default{
    name:"food list",
    components: {
        FoodCardViewVue
    },
    data(){
        return {
            foods:[],
            // food:this.foods,
            // GET_FOODS:"query"
            local_category: "all"
        }
    },
    apollo: {
  },
  computed: mapState(['category','search']),
  watch:{
      category(newValue){
          this.local_category=newValue
          this.Fillter();
      },
      search(_key){
            this.Search(_key);
      }
  },
  methods:{
      async Fillter(){
        //   this.filter_foods({category:"Fruit"})
        //   this.$store.dispatch('filter_foods',{category:"Fruit"});
        //   console.log("filtered foods")
        //   console.log(this.$store.getters.food_filter)
        // console.log(JSON.parse(JSON.stringify(this.$store.getters.food_filter)));
        let FOODS = "fetching_query";
    if (this.$store.getters.getCategory === "all") {
        FOODS = await this.$apollo.query({
            query: ALL_FOODS
        })
    } else {
        FOODS = await this.$apollo.query({
            query: FILTER_FOOD,
            variables: {
                category: this.$store.getters.getCategory
            }
        })
    }
    // console.log("foods before fetching");
    // console.log(FOODS);
    // console.log("foods after fetching");
    this.foods = FOODS.data.foods
    // console.log(this.foods);
    // let FOOD=(JSON.parse(JSON.stringify(FOODS.data.foods)));
    
    //sending data to vuex store value
    // this.$store.dispatch('filter_foods',FOOD);
    // this.$store.dispatch('setCategory','infinitly increasing value');

    // calling getters function
    // console.log("check Value from vuex");
    // console.log(this.$store.getters.getFood);
    // console.log(this.$store.getters.getCategory);

      },
      ...mapActions(['filter_foods']),
      async Search(_key){
          let FOODS="list_of_foods";
          if (_key !==null) {
        FOODS = await this.$apollo.query({
            query: SEARCH_FOOD,
            variables: {
                search_key: this.$store.getters.getSearch
            }
        })
    } else {
        FOODS = await this.$apollo.query({
            query: ALL_FOODS
        })
    }
    this.foods=FOODS.data.foods;
      }
  },
    mounted(){
        this.Fillter()
  },
}
</script>