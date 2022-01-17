<template>
    <body class="pr-5 pl-14">
        <div class="pt-6">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2">Foods</h4>
        </div>
        <!-- list of card views will be displayed -->
         <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="food in Foods" :key="food.id">
                <food-card-view-vue :price=food.price :imageLink="food.imageLink" :Name="food.Name" :description=food.description :likes=food.likes :comments=food.comments></food-card-view-vue>
            </div>
        </div>
        <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div>
    </body>
</template>

<script>
import FoodCardViewVue from "./cardViews/FoodCardView.vue"
export default{
    name:"food list",
    components: {
        FoodCardViewVue
    },
    data(){
        return {
            Foods:[
                {
                    id:"1",
                    price:320,
                    imageLink:"",
                    Name:"Burger",
                    description:"dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia",
                    likes:50,
                    comments:96
                },
                {
                    id:"2",
                    price:200,
                    imageLink:"",
                    Name:"Salad",
                    description:"dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia",
                    likes:25,
                    comments:14
                },
                {
                    id:"3",
                    price:147,
                    imageLink:"",
                    Name:"Burgerizza",
                    description:"dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia",
                    likes:12,
                    comments:100
                },
                {
                    id:"4",
                    price:150,
                    imageLink:"",
                    Name:"Shiro",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia explicabo porro aliasnecessitatibus ipsamobcaecati voluptatem nulla harum!",
                    likes:69,
                    comments:33
                },
                
                {
                    id:"4",
                    price:169,
                    imageLink:"",
                    Name:"Pizza",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia explicabo porro aliasnecessitatibus ipsamobcaecati voluptatem nulla harum!",
                    likes:8,
                    comments:11
                },
                
                {
                    id:"4",
                    price:356,
                    imageLink:"",
                    Name:"Pizza",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia explicabo porro aliasnecessitatibus ipsamobcaecati voluptatem nulla harum!",
                    likes:55,
                    comments:24
                },
                
                {
                    id:"4",
                    price:154,
                    imageLink:"",
                    Name:"Pizza",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia explicabo porro aliasnecessitatibus ipsamobcaecati voluptatem nulla harum!",
                    likes:23,
                    comments:89
                },
                
                {
                    id:"4",
                    price:22,
                    imageLink:"",
                    Name:"Pizza",
                    description:"dolor sit amet consectetur adipisicing elit.Cumque veniam eligendi aperiam nemo velit in placeat necessitatibus numquam itaque! Natus mollitia",
                    likes:50,
                    comments:96
                }
            ]
        }
    }
}
</script>