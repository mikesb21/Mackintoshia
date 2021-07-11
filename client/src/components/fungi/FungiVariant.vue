<template>
  <v-container class="form-unit-container">
    <v-text-field label="Reference Name" outlined clearable required />
    <v-text-field label="Image link" outlined clearable required />
    <v-textarea label="Description" outlined clearable />
  </v-container>
</template>

<script lang="ts">
// Vue
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "FungiVariant",
})
class FungiVariant extends Vue {}
export default FungiVariant;
</script>
