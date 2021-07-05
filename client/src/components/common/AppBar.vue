<template>
  <v-app-bar app dark>
    <div class="d-flex align-center">
      <router-link class="navbar-brand" to="/">
        <v-img
          alt="Fungi"
          class="shrink mr-5"
          contain
          src="../../assets/a_muscaria.png"
          transition="scale-transition"
          width="40"
        />
      </router-link>
      <router-link
        class="navbar-brand mx-4"
        to="/"
        style="text-decoration: none"
      >
        <h1>📑</h1>
      </router-link>
      <router-link
        class="navbar-brand mx-4"
        to="/"
        style="text-decoration: none"
      >
        <h1>🍄</h1>
      </router-link>
      <router-link
        class="navbar-brand mx-4"
        to="/"
        style="text-decoration: none"
      >
        <h1>📸</h1>
      </router-link>
    </div>
    <v-spacer />
    <router-link class="navbar-brand mx-4" to="/" style="text-decoration: none">
      <h1>🔮</h1>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
class AppBar extends Vue {}
export default AppBar;
</script>
