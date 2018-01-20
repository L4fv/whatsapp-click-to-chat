<template>
  <v-layout wrap row align-center>
    <v-flex xs12 >
      <span class="subheading primary--text">Guardar Valores</span>
    </v-flex>
    <v-flex xs8>
      <v-select class="subheading" autocomplete :items="code" item-value="callingCode" return-object v-model="country.default" label="País por defecto"
        item-text="name" bottom :error-messages="errors.collect('country')" v-validate="'required'" data-vv-name="country"
        required></v-select>
    </v-flex>
    <v-flex xs4>
      <v-btn flat @click.native="saveCountry" class="primary--text">Guardar</v-btn>
    </v-flex>
    <v-flex xs12>
    </v-flex>
    <v-flex xs8>
      <v-text-field v-model="message.text" label="Mensaje por defecto" placeholder="Hello ..." multi-line auto-grow></v-text-field>
    </v-flex>
    <v-flex xs4>
      <v-btn flat guardar class="primary--text" @click.native="saveMessage">guardar </v-btn>
    </v-flex>
    
  </v-layout>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["code"],
  data() {
    return {
      m: null
    };
  },
  computed: {
    ...mapState(["message", "country"])
  },
  methods: {
    saveCountry() {
      this.$store.commit("SET_COUNTRY", this.country);
    },
    saveMessage() {
      this.$store.commit("SET_MESSAGE", this.message);
    }
  }
};
</script>

