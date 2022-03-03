<template>
    <div class="grid grid-cols-6">
        <div class="col-span-1">
            <DashboardSideNavigation class="border-r border-gray-400 h-full"/>
        </div>
        <div class="col-span-5">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import DashboardSideNavigation from "../../../nav/DashboardSideNavigation.vue"
export default {
    components:{DashboardSideNavigation}
}
</script>