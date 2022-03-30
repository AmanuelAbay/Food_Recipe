<template>
    <div class="flex justify-between py-3 md:pl-20 sm:pl-5 pr-10 items-center border-b-100 border-black-900 bg-gray-100">
        <div class="flex justify-start items-center">
            <router-link to="/food"><img src="../../../assets/logo.png" alt="Kaffe" class="h-10 mr-10"></router-link>
        </div>

        <div class="flex justify-end items-center pr-5 space-x-5">
                    <nav v-if="visible1()">
                <ul  class="md:flex justify-end text-lg space-x-2 items-center" v-if="this.$route.path !=='/food/description/:id'"> 
                    <li>
                        <router-link to="/foods" class="px-3 py-2">
                            <span>Food</span>
                        </router-link>
                    </li>
                    <li >
                        <router-link to="/saved" class="px-3 py-2">
                            <span>Favorite</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/setting/dashboard" class="px-3 py-2">
                            <span>Account</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            
            <div v-if="!loggedIn" class="flex justify-end items-center pr-5 space-x-5">
                <div v-if="this.visible()">
                    <router-link class="w-50 bg-gray-400 px-3 py-2 rounded text-white hover:bg-gray-700 transition duration-300 capitalize" to="/signup">sign up</router-link>
                </div>
                <div v-if="this.visible()">
                    <router-link class="w-50 bg-primary px-3 py-2 rounded text-white hover:bg-orange-900 transition duration-300 capitalize" to="/signin">sign in</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {isLoggedIn} from "../../utils/user.js"
export default {
    data(){
        return {
            category: "all",
            path:this.$route.path,
            search:"",
            loggedIn:false
            
        }
    },
    methods:{
        visible(){
            if((this.$route.path ==="/signin") || (this.$route.path==="/signup"))
                {return false;}
            else return true
            // else if(this.$route.path==="/signup")
            // return false;
            // else return true;
        },
        visible1(){
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
input:focus{
    outline: none;
}
a.router-link-active {
        border-bottom:4px solid #FF7F3F;
        font-weight: bold;
    }
</style>