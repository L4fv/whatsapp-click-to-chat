<template>
  <v-layout wrap row align-center>
    <v-flex xs12>
      <span class="subheading primary--text">Guardar Valores</span>
    </v-flex>
    <v-flex xs8>
      <v-autocomplete
        class="subheading"
        autocomplete
        :items="code"
        item-value="callingCode"
        return-object
        v-model="country.default"
        label="País por defecto"
        item-text="name"
        :error-messages="errors.collect('country')"
        v-validate="'required'"
        data-vv-name="country"
        required
      ></v-autocomplete>
    </v-flex>
    <v-flex xs4>
      <v-btn flat @click.native="saveCountry" class="primary--text"
        >Guardar</v-btn
      >
    </v-flex>
    <v-flex xs12> </v-flex>
    <v-flex xs8>
      <v-textarea
        v-model="mensaje"
        label="Mensaje por defecto"
        placeholder="Hello ..."
        multi-line
        auto-grow
      ></v-textarea>
    </v-flex>
    <v-flex xs4>
      <v-row>
        <v-col>
          <v-btn flat class="primary--text" @click.native="addMessages">
            Agregar
          </v-btn>
        </v-col>
        <v-col>
          <v-btn dark color="red" @click.native="cleanMessage"> BORRAR </v-btn>
        </v-col>
      </v-row>
    </v-flex>
        <v-flex xs4 v-for="item in messages" :key="item">
               <v-textarea
               key="item"
        :value="item"
        label="Mensaje por defecto"
        placeholder="Hello ..."
        multi-line
        auto-grow
      ></v-textarea>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex';
export default {
  props: ['code'],

  computed: {
    ...mapState(['messages', 'country']),
  },
  methods: {
    saveCountry() {
      this.$store.commit('SET_COUNTRY', this.country);
    },
    addMessages() {
      this.$store.commit('SET_MESSAGE', this.message);
    },
    cleanMessage() {
      this.$store.commit('RESET_MESSAGE');
    },
  },
};
</script>
