<template>
<div>
    <body class="pr-5 pl-14" v-if="!this.$apollo.loading">
        <div class="pt-6">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2" @click="callingGetters()">Foods</h4>
        </div>
        <!-- list of card views will be displayed -->
         <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
            <div v-for="food in foods" :key="food.id">
                    <food-card-view-vue :food="food"></food-card-view-vue>
            </div>
        </div>
        <!-- <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div> -->
    </body>
    <div v-else>           
        <h1>Cooking in progress..</h1>
        <div id="cooking">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div id="area">
            <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
            </div>
            <div id="pancake">
            <div id="pastry"></div>
            </div>
        </div>
        </div>
    </div>
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
        foods:{
            query: ALL_FOODS,
            loadingKey: 'loading',
            pollInterval: 500,
        }
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
        // this.Fillter()
  },
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Amatic+SC");
h1 {
  position: relative;
  margin: 0 auto;
  top: 10vh;
  width: 50vw;
  text-align: center;
  font-family: "Amatic SC";
  font-size: 6vh;
  color: #FF7F3F;
  opacity: 0.75;
  animation: pulse 2.5s linear infinite;
}

#cooking {
  position: relative;
  margin: 0 auto;
  top: 0;
  width: 75vh;
  height: 50vh;
  overflow: hidden;
}
#cooking .bubble {
  position: absolute;
  border-radius: 100%;
  box-shadow: 0 0 0.25vh #4d4d4d;
  opacity: 0;
}
#cooking .bubble:nth-child(1) {
  margin-top: 2.5vh;
  left: 58%;
  width: 2.5vh;
  height: 2.5vh;
  background-color: #454545;
  animation: bubble 2s cubic-bezier(0.53, 0.16, 0.39, 0.96) infinite;
}
#cooking .bubble:nth-child(2) {
  margin-top: 3vh;
  left: 52%;
  width: 2vh;
  height: 2vh;
  background-color: #3d3d3d;
  animation: bubble 2s ease-in-out 0.35s infinite;
}
#cooking .bubble:nth-child(3) {
  margin-top: 1.8vh;
  left: 50%;
  width: 1.5vh;
  height: 1.5vh;
  background-color: #333;
  animation: bubble 1.5s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.55s infinite;
}
#cooking .bubble:nth-child(4) {
  margin-top: 2.7vh;
  left: 56%;
  width: 1.2vh;
  height: 1.2vh;
  background-color: #2b2b2b;
  animation: bubble 1.8s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.9s infinite;
}
#cooking .bubble:nth-child(5) {
  margin-top: 2.7vh;
  left: 63%;
  width: 1.1vh;
  height: 1.1vh;
  background-color: #242424;
  animation: bubble 1.6s ease-in-out 1s infinite;
}
#cooking #area {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-color: transparent;
  transform-origin: 15% 60%;
  animation: flip 2.1s ease-in-out infinite;
}
#cooking #area #sides {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 15% 60%;
  animation: switchSide 2.1s ease-in-out infinite;
}
#cooking #area #sides #handle {
  position: absolute;
  bottom: 18%;
  right: 80%;
  width: 35%;
  height: 20%;
  background-color: transparent;
  border-top: 1vh solid #333;
  border-left: 1vh solid transparent;
  border-radius: 100%;
  transform: rotate(20deg) rotateX(0deg) scale(1.3, 0.9);
}
#cooking #area #sides #pan {
  position: absolute;
  bottom: 20%;
  right: 30%;
  width: 50%;
  height: 8%;
  background-color: #333;
  border-radius: 0 0 1.4em 1.4em;
  transform-origin: -15% 0;
}
#cooking #area #pancake {
  position: absolute;
  top: 24%;
  width: 100%;
  height: 100%;
  transform: rotateX(85deg);
  animation: jump 2.1s ease-in-out infinite;
}
#cooking #area #pancake #pastry {
  position: absolute;
  bottom: 26%;
  right: 37%;
  width: 40%;
  height: 45%;
  background-color: #FF7F3F;
  box-shadow: 0 0 3px 0 #333;
  border-radius: 100%;
  transform-origin: -20% 0;
  animation: fly 2.1s ease-in-out infinite;
}

@keyframes jump {
  0% {
    top: 24%;
    transform: rotateX(85deg);
  }
  25% {
    top: 10%;
    transform: rotateX(0deg);
  }
  50% {
    top: 30%;
    transform: rotateX(85deg);
  }
  75% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(85deg);
  }
}
@keyframes flip {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(-27deg);
  }
  30%, 50% {
    transform: rotate(0deg);
  }
  55% {
    transform: rotate(27deg);
  }
  83.3% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes switchSide {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@keyframes fly {
  0% {
    bottom: 26%;
    transform: rotate(0deg);
  }
  10% {
    bottom: 40%;
  }
  50% {
    bottom: 26%;
    transform: rotate(-190deg);
  }
  80% {
    bottom: 40%;
  }
  100% {
    bottom: 26%;
    transform: rotate(0deg);
  }
}
@keyframes bubble {
  0% {
    transform: scale(0.15, 0.15);
    top: 80%;
    opacity: 0;
  }
  50% {
    transform: scale(1.1, 1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.33, 0.33);
    top: 60%;
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1, 1);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.2, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0.25;
  }
}
</style>