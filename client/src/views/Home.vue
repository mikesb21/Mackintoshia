<template>
  <FungiCard />
</template>

<script lang="ts">
// Vue
import { Vue, Component } from "vue-property-decorator";

// Components
import FungiCard from "../components/fungi/FungiCard.vue";

@Component({
  components: {
    FungiCard,
  },
})
class Home extends Vue {}
export default Home;
</script>
