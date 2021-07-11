<template>
  <v-container>
    <v-app-bar app color="#2E4D43">
      <div class="d-flex align-center">
        <router-link class="navbar-brand no-text-decoration" to="/">
          <v-img
            alt="Fungi"
            class="shrink mr-5"
            contain
            src="../../assets/a_muscaria.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <router-link class="navbar-brand no-text-decoration mx-4" to="/new">
          <h1>📑</h1>
        </router-link>
        <router-link class="navbar-brand no-text-decoration mx-4" to="/">
          <h1>🍄</h1>
        </router-link>
        <router-link class="navbar-brand no-text-decoration mx-4" to="/about">
          <h1>📸</h1>
        </router-link>
      </div>
      <v-spacer />
      <router-link class="navbar-brand no-text-decoration mx-4" to="/">
        <h1>🔮</h1>
      </router-link>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
class AppBar extends Vue {}
export default AppBar;
</script>
