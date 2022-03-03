<template>
    <div>
        <ul class="flex flex-col justify-end space-y-2 mt-5 border-r border-black-900 h-max">
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
            <li>
                <router-link to="/setting/account_setting" class="pl-10 flex justify-start py-2">
                        <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="ml-2 text-2xl font-regular text-black-200">Account</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
a.router-link-active {
background-color: #55555545;
    }
</style>