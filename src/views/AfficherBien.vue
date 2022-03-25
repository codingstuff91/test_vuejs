<template>
  <div>
    <h1>Détail du bien</h1>
    <h2>{{ bien.id }}</h2>
    <p>{{ bien.description }}</p>
    <p>Prix du bien : {{ bien.price }} €</p>
    <p>Prix au m2 : {{ bien.price / bien.area }} €</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["bien"]),
  mounted() {
    this.$store.dispatch("afficherBien", this.$route.params.id);
  },
};
</script>

<style scoped></style>
