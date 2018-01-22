<template>

  <v-card flat>
    <v-card-title class="grey lighten-5">
      El proceso es semi-automático
      <br/> 1. Agrega tu número para enviarte los links
      <br/> 2. Agrega números a enviar
      <br/> 3. Escribir mensaje de difusión
      <br/> 4. Click en enviar
      <br/> <span class="red--text">5. Deberías recibir un mensaje con los LINKS de la lista de difusión (No disponible)</span>
    </v-card-title>    
    <v-card-text>
      <v-text-field type="number" v-model="ownPhoneNumber" auto-focus placeholder="123456789" label="Tú Número" :error-messages="errors.collect('ownPhoneNumber')"
        v-validate="'required|numeric'" data-vv-name="ownPhoneNumber" required></v-text-field>
      <v-container fluid pa-0>
        <v-layout wrap row align-center>
          <v-flex xs12>Lista de difusión</v-flex>
          <v-flex xs9 text-xs-center>
            <v-text-field type="number" v-model="phoneNumber" auto-focus placeholder="987654321" label="Número" v-validate="'required|numeric'"
              data-vv-name="phoneNumber" required @keyup.enter="addPhone(phoneNumber)"></v-text-field>
          </v-flex>
          <v-flex xs3 text-xs-center>
            <v-btn icon @click.native="addPhone(phoneNumber)">
              agregar
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-layout wrap row :key="i" v-for="(item, i) in arrayNumbers">
              <v-flex xs10>
                {{item}}
              </v-flex>
              <v-flex xs2>
                <v-btn icon @click.native="clearPhoneNumber(i)">
                  <v-icon>clear</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="message.text" label="Mensaje" placeholder="Hello ..." multi-line auto-grow></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions text-xs-center>
      <v-spacer></v-spacer>
      <v-btn large class="primary" @click.native="advanceSendWhatsapp" dark center>
        <icon name="whatsapp" class="mr-2" scale="2" dark></icon>Enviar Mensaje Masivo</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
    {{urls}}
    <!-- </form> -->
  </v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["code"],
  data() {
    return {
      urls: [],
      ownPhoneNumber: null,
      phoneNumber: null,
      arrayNumbers: []
    };
  },
  computed: {
    ...mapState(["country", "message"])
  },
  methods: {
    addPhone(item) {
      if (item) {
        this.arrayNumbers.push(item);
        this.phoneNumber = null;
      }
    },
    clearPhoneNumber(i) {
      this.arrayNumbers.splice(i, 1);
    },

    advanceSendWhatsapp() {
      this.arrayNumbers.forEach(element => {
        let url = `https://api.whatsapp.com/send?phone=${
          this.country.default.callingCode
        }${element}&text='${this.message.text}'`;

        this.urls.push(url);
      });
      this.urls = this.urls.join(", ");
      console.log(this.urls);
      window.open(
        `https://api.whatsapp.com/send?phone=${
          this.country.default.callingCode
        }${this.ownPhoneNumber}&text='Mensajes${this.urls}'`,
        "_blank"
      );
    }
  }
};
</script>
