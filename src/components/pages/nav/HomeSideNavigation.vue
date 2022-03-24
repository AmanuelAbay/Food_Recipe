<template>
        <nav>
            <ul class="md:block text-lg mt-7 space-y-2 items-center"> 
                <li>
                    <router-link to="/foods" class="px-3 flex justify-end">
                        <span>Food</span>
                        <svg class="w-5 ml-2" stroke="currentColor" :fill=this.FoodsColor viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </router-link>
                </li>
                <li v-if="visible()">
                    <router-link to="/saved" class="px-3 flex justify-end">
                        <span>Favorite</span>
                        <svg class="w-5 ml-2" :fill="this.SavedColor" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </router-link>
                </li>
                <li v-if="visible()">
                    <router-link to="/setting/dashboard" class="px-3 flex justify-end">
                        <span>Account</span>
                        <svg class="w-5 ml-2" :fill= this.AccountColor stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
import {isLoggedIn} from "../../utils/user.js"
export default {
    name:"Side Navigation",
    data(){
        return {
            RestaurantsColor:"none",
            AccountColor:"none",
            SavedColor:"none",
            FoodsColor:"none",
            loggedIn:false
            }
            
    },
    methods:{
        visible(){
            if(this.loggedIn)
            return true
            else false
        }
    },
    mounted(){
        this.loggedIn=isLoggedIn.value
    }
}
</script>
<style scoped>
a.router-link-active {
        border-right:4px solid #FF7F3F;
        font-weight: bold;
    }
</style>