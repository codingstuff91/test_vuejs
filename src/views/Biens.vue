<template>
  <div>
    <h1>Choix du type de biens à afficher</h1>

    <div class="form-input">
      <label>Type de bien</label>
      <select v-model="type_bien">
        <option v-for="bien in types_biens" :key="bien">{{ bien }}</option>
      </select>
    </div>

    <div class="form-input">
      <label>Etat du bien :</label>
      <select v-model="etat">
        <option v-for="etat in liste_etats" :key="etat">{{ etat }}</option>
      </select>
    </div>

    <button @click="filtrerListeDesBiens(type_bien,etat)">Rechercher</button>

    <div class="card" v-for="bien in listeDesBiens" :key="bien.id">
      <h2>Titre :{{ bien.description }}</h2>
      <p>Prix :{{ bien.price }}€</p>
      <p><a :href="`/biens/${bien.id}`">Consulter le produit</a></p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      types_biens: ["HOUSE", "FLAT", "LAND"],
      liste_etats: ["ACTIVE", "INACTIVE"],
      type_bien: "",
      etat: "",
    };
  },
  computed: mapState(["listeDesBiens"]),
  methods: {
    filtrerListeDesBiens(type_bien, etat) {
      this.$store.dispatch("filtrerListeDesBiens", {type_bien, etat});
    },
  },
  mounted () {
    this.$store.dispatch("recupererTousLesBiens");
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid grey;
  border-radius: 20px;
}
.form-input {
  margin-bottom: 20px;
  display: block;
}

.form-input label {
  margin-right: 20px;
}
</style>
