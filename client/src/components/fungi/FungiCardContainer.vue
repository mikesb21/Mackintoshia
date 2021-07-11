<template>
  <v-container class="d-flex flex-wrap">
    <div v-for="fungi in fungiList" :key="fungi.id">
      <FungiCard :fungi="fungi" class="mx-1" />
    </div>
  </v-container>
</template>

<script lang="ts">
//  Vue
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

// Types
import { Fungi } from "../../interfaces";

// Components
import FungiCard from "./FungiCard.vue";

@Component({
  name: "FungiCardContainer",
  components: {
    FungiCard,
  },
  computed: {
    ...mapState(["fungiList"]),
  },
})
class FungiCardContainer extends Vue {
  fungiList!: Array<Fungi>;
}
export default FungiCardContainer;
</script>
