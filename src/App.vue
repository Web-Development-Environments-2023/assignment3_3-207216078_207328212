<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <!-- <MainPage></MainPage> -->
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import MainPage from './pages/MainPage.vue';

export default {
    name: "App",
    methods: {
        Logout() {
            this.$root.store.logout();
            this.$root.toast("Logout", "User logged out successfully", "success");
            this.$router.push("/").catch(() => {
                this.$forceUpdate();
            });
        }
    },
    components: { NavigationBar }
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
