<template>
  <form v-on:submit.prevent="advanceSendWhatsapp">
    <v-layout wrap row align-center>
      <v-flex xs12>Enviar Mensaje predeterminado a varias personas vía whatsapp</v-flex>
      <v-flex xs3 pa-1>
        <v-select autocomplete :items="code" item-value="iso" v-model="country" label="País" item-text="nome" bottom :error-messages="errors.collect('country')"
          v-validate="'required'" data-vv-name="country" required></v-select>
      </v-flex>
      <v-flex xs7 pa-1>
        <v-text-field v-model="phoneNumber" label="Número" v-validate="'required|numeric'" data-vv-name="phoneNumber" @keyup.enter="addPhone"></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn icon @click.native="addPhone">
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12>Listado a enviar</v-flex>
      <v-flex xs12 pa-3>
        <ul>
          <li v-for="(item, key) in arrayNumbers" :key="key" v-text="item"></li>
        </ul>
      </v-flex>
      <v-flex xs12>
        <v-btn block class="teal--text" type="submit">
          <icon name="whatsapp" class="mr-2 teal--text"></icon>Enviar Mensaje</v-btn>
      </v-flex>
    </v-layout>
  </form>
</template>
<script>
export default {
  methods: {
    advanceSendWhatsapp() {
      this.arrayNumbers.forEach(element => {
        window.open(
          `https://api.whatsapp.com/send?phone=${
            this.country.callingCode
          }${element}`,
          "_blank"
        );
      });
    }
  }
};
</script>
