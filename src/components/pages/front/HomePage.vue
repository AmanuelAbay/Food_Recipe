<template>
    <main class="grid md:grid-cols-5">
        <!-- side navigation -->
        <div class="md:col-span-1 sm:justify-between md:flex md:justify-end h-max border-r border-gray-200">
            <HomeSideNavigation/>
        </div>

        <!-- main body -->
        <div class="md:col-span-4">
            <router-view></router-view>
        </div>

    </main>
</template>
<script>
import HomeSideNavigation from "../nav/HomeSideNavigation.vue"
export default {
    data(){
        return {
        }
    },
    components:{HomeSideNavigation}
}
</script>