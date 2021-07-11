<template>
  <v-app class="basil basil--text">
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
// Vue
import { Component, Vue } from "vue-property-decorator";

// Components
import AppBar from "./components/common/AppBar.vue";

// Styles
import "./assets/App.scss";

@Component({
  components: {
    AppBar,
  },
})
class App extends Vue {}
export default App;
</script>

<style>
@font-face {
  font-family: "KeeponTruckin";
  src: local("KeeponTruckin"),
    url(./assets/fonts/KeeponTruckin.ttf) format("truetype");
}

.title {
  font-family: "KeeponTruckin";
}
</style>
