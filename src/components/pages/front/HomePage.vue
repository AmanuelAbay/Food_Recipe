<template>
    <main class="">
        <!-- side navigation -->
        <div class="md:col-span-1 sm:justify-between md:flex md:justify-end">
            <!-- <HomeSideNavigation v-if="this.$route.path!=='/food/description/:id'"/> -->
        </div>

        <!-- main body -->
        <div class="">
            <router-view></router-view>
        </div>

        <div class="md:col-span-1 sm:justify-between md:flex md:justify-end h-max border-r border-gray-200">
            <!-- <HomeSideNavigation v-if="this.$route.path!=='/food/description/:id'"/> -->
        </div>

    </main>
</template>
<script>
// import HomeSideNavigation from "../nav/HomeSideNavigation.vue"
export default {
    data(){
        return {
        }
    },
    // components:{HomeSideNavigation}
}
</script>