<template>
  <form v-on:submit.prevent="sendWhatsapp">
    <v-card flat>
      <v-card-text>
        <v-select autocomplete :items="code" item-value="callingCode" v-model="country.default" label="País" item-text="name" bottom
          :error-messages="errors.collect('country')" v-validate="'required'" data-vv-name="country" required return-object></v-select>
      </v-card-text>
      <v-card-text>
        <v-text-field type="number" v-model="phoneNumber" auto-focus placeholder="987654321" label="Número" :error-messages="errors.collect('phoneNumber')"
          v-validate="'required|numeric'" data-vv-name="phoneNumber" required></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field v-model="message.text" :label="label" placeholder="Hello ..." multi-line auto-grow></v-text-field>
        
      </v-card-text>
      <v-card-actions text-xs-center>
        <v-spacer></v-spacer>
        <v-btn large class="primary" type="submit" dark center>
          <icon name="whatsapp" class="mr-2" scale="2" dark></icon>Enviar Mensaje</v-btn>
          <v-spacer></v-spacer>
      </v-card-actions>
      
    </v-card>
  </form>
</template>
<script>
import { mapState } from "vuex";
export default {
  $_veeValidate: {
    validator: "new"
  },
  props: ["code"],
  data() {
    return {
      phoneNumber: null
    };
  },
  computed: {
    label() {
      return `Enviar mensaje a +${this.country.default.callingCode} ${
        this.phoneNumber ? this.phoneNumber : ""
      }`;
    },
    ...mapState(["country", "message"])
  },
  methods: {
    sendWhatsapp() {
      /* this is the magic */
      window.open(
        `https://api.whatsapp.com/send?phone=${
          this.country.default.callingCode
        }${this.phoneNumber}&text=${this.message.text}`,
        "_blank"
      );
    }
  }
};
</script>
