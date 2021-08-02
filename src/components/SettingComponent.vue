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
      <v-btn flat class="primary--text" @click.native="addMessages">
        Agregar
      </v-btn>
    </v-flex>
    <v-flex xs12 v-for="item in messages" :key="item.id">
      <v-layout>
        <v-flex xs4>
          <p>{{ item.text }}</p>
        </v-flex>
        <v-flex xs4>
          <v-btn small dark color="red" @click.native="cleanMessage(item)">
            BORRAR
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn small dark color="blue" @click.native="selectMessage(item)">
            Seleccionar
          </v-btn>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
    </v-flex>
    <v-snackbar right top color="green" v-model="snackbar">
      Success
    </v-snackbar>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex';
export default {
  props: ['code'],
  data() {
    return {
      checkbox: false,
      phoneNumber: null,
      mensaje: '',
      snackbar: false
    };
  },
  computed: {
    ...mapState(['messages', 'message', 'country'])
  },
  methods: {
    saveCountry() {
      this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: 'send',
        action: 'click',
        label: 'country',
        value: this.country,
        noninteraction: false // Optional
      });
      this.$store.commit('SET_COUNTRY', this.country);
    },
    addMessages() {
      this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: 'send',
        action: 'click',
        label: 'message',
        value: '',
        noninteraction: false // Optional
      });
      this.$store.commit('SET_MESSAGES', this.mensaje);
      this.mensaje = '';
    },
    selectMessage(payload) {
      this.snackbar = true;
      this.$store.commit('SET_MESSAGE', payload.text);
    },
    cleanMessage(payload) {
      this.$store.commit('CLEAN_ITEM_MESSAGES', payload);
    }
  }
};
</script>
