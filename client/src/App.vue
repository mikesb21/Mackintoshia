<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "./components/common/AppBar.vue";

@Component({
  components: {
    AppBar,
  },
})
class App extends Vue {}
export default App;
</script>
