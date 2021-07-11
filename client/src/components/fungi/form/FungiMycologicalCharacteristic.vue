<template>
  <v-container class="form-unit-container">
    <v-textarea label="Description" outlined clearable />
    <v-text-field label="Image link" outlined clearable />
  </v-container>
</template>
<script lang="ts">
// Vue
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "FungiMycologicalCharacteristic",
})
class FungiMycologicalCharacteristic extends Vue {}
export default FungiMycologicalCharacteristic;
</script>
