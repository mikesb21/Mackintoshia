<template>
  <v-container>
    <h1 class="funky-title-secondary">Add Fungi</h1>
    <Form />
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component } from "vue-property-decorator";

// Components
import Form from "../components/fungi/form/FungiForm.vue";

@Component({
  name: "NewFungi",
  components: {
    Form,
  },
})
class NewFungi extends Vue {}
export default NewFungi;
</script>
