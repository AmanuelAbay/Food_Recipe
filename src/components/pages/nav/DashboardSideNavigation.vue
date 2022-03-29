<template>
    <div>
        <ul class="flex flex-col justify-end space-y-2 mt-5 border-r border-black-900 h-max">
            <li class=" mt-9">
                <div class="mx-auto flex flex-col py-2 items-center" v-if="!this.$apollo.loading">
                    <font-awesome-icon icon="user-circle" class="text-black mt-2 text-6xl mr-2"></font-awesome-icon>
                    <div class="py-1 text-2xl font-medium capitalize text-black-200">{{users[0].name}}</div>
                    <div>{{users[0].email}}</div>
                </div>
                <div v-else class="mx-auto">Loading...</div>
            </li>
            <li>
                <router-link to="/setting/dashboard" class="pl-10 flex justify-start py-2">
                        <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        <span class="ml-2 text-2xl font-regular capitalize text-black-200">Dashboard</span>
                </router-link>
            </li>
            <li>
                <router-link to="/setting/newItem" class="pl-10 flex justify-start py-2">
                        <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                        <span class="ml-2 text-2xl capitalize font-regular text-black-200">new Item</span>
                </router-link>
            </li>
            <li @click="logout()">
                <div class="pl-10 flex justify-start py-2 items-cente cursor-pointer">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    <div class="ml-2 text-2xl font-regular text-black-200">Log out</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {unset} from "../../utils/user.js"
import {userId} from "../../utils/user.js"
import CURRENT_USER from "../../graphql/CURRENT_USER.js"
export default {
    name:"Dashboard Navigation",
    data(){
        return {
            users:[]
        }
    },
    components:{
        FontAwesomeIcon
    },
    methods:{
        logout(){
            unset()
            location.replace("/");
        }
    },
    apollo:{
        users:{
            query: CURRENT_USER,
                variables () {   
                    return {
                        id: userId.value // sending variable data of id on route params list
                    }
                },
                loadingKey: 'loading',
            }
    }
}
</script>

<style scoped>
a.router-link-active {
background-color: #55555545;
    }
</style>