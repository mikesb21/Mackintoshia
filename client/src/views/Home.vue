<template>
  <v-container>
    <h1 class="funky-title-secondary">Recents</h1>
    <FungiCardContainer />
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component } from "vue-property-decorator";
import { mapMutations, mapState } from "vuex";

// Components
import FungiCardContainer from "../components/fungi/FungiCardContainer.vue";

// Types
import { Fungi } from "../interfaces/index";

// API
import FungiApi from "../apis/fungi-api";

@Component({
  name: "Home",
  components: {
    FungiCardContainer,
  },
  methods: {
    ...mapMutations(["setFungiList", "updateLoading"]),
  },
  computed: {
    ...mapState(["fungiList"]),
  },
})
class Home extends Vue {
  fungiApi = new FungiApi();

  setFungiList!: Function;

  updateLoading!: Function;

  fungiList!: Array<Fungi>;

  async mounted() {
    if (this.fungiList.length === 0) {
      try {
        this.updateLoading(true);
        const list: Array<Fungi> = await this.fungiApi.getFungiList();
        this.setFungiList(list);
        this.updateLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
export default Home;
</script>
