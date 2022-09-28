<template>
    <top-navigation></top-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TopNavigation from "./components/pages/nav/TopNavigation.vue";
export default {
  name: 'App',
  components: {TopNavigation}
}
</script>
