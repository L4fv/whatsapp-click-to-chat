<template>
  <v-app light>
    <v-layout wrap row class="background">
      <v-flex xs12 md6 lg4 offset-lg4 offset-md3>
        <v-card class="cardLayout">
          <v-toolbar color="primary" dark tabs>
            <v-toolbar-title class="white--text">Enviar Whatsapp</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-tabs color="primary" slot="extension" slider-color="yellow" v-model="model" grow>
              <v-tab href="#tab-1" class="red--text">
                <v-icon>message</v-icon>
              </v-tab>
              <v-tab href="#tab-2">
                <v-icon>build</v-icon>
              </v-tab>
            </v-tabs>
          </v-toolbar>
          <v-tabs-items v-model="model" touchless>

            <v-tab-item id="tab-1">
              <!-- demo tab -->
              <v-card flat>
                <v-card-text>
                  <form v-on:submit.prevent="sendWhatsapp">
                    <v-layout wrap row align-center>
                      <v-flex xs3 pa-1>
                        <v-select autocomplete :items="code" item-value="callingCode" v-model="country.default" label="País" item-text="code" bottom
                          :error-messages="errors.collect('country')" v-validate="'required'" data-vv-name="country" required></v-select>
                      </v-flex>
                      <v-flex xs7 pa-1>
                        <v-text-field v-model="phoneNumber" auto-focus placeholder="987654321" label="Número" :error-messages="errors.collect('phoneNumber')"
                          v-validate="'required|numeric'" data-vv-name="phoneNumber" required></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-btn icon @click.native="clearPhoneNumber">
                          <v-icon>clear</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="message.text" label="Mensaje" placeholder="Hello ..." multi-line auto-grow></v-text-field>
                      </v-flex>
                      <v-flex xs12 text-xs-center mt-5>
                        <v-btn large class="primary" type="submit" dark>
                          <icon name="whatsapp" class="mr-2" scale="2" dark></icon>Enviar Mensaje</v-btn>
                      </v-flex>
                    </v-layout>
                  </form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item id="tab-2">
              <!-- Setting tab -->
              <v-card flat>
                <v-card-text>
                  <setting-component :code="code"></setting-component>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>
      <!-- github and author links -->
      <v-flex xs12 text-xs-center v-if="model==='tab-2'">
        <div class="linkUser">
          GitHub Repository:
          <a to="" target="_blank">GitHub</a>
          <br/> Other project:
          <a href="https://epik.com.pe/" target="_blank" class="primary--text">Epik Perú</a>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import { code } from "./code.js"; //json of country dial
import SettingComponent from "./components/SettingComponent";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/whatsapp";
import { mapState } from "vuex";
export default {
  $_veeValidate: {
    validator: "new"
  },
  components: {
    Icon,
    SettingComponent
  },
  data() {
    return {
      phoneNumber: null,
      model: null,
      code: code,
      dictionary: {
        custom: {
          phoneNumber: {
            numeric: "Only Numbers"
          }
        }
      }
    };
  },
  computed: {
    ...mapState(["country", "message"])
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    clearPhoneNumber() {
      this.phoneNumber = null;
    },
    sendWhatsapp() {
      window.open(
        `https://api.whatsapp.com/send?phone=${this.country.callingCode}${
          this.phoneNumber
        }&text=${this.message}`,
        "_blank"
      );
    }
  }
};
</script>
<style scoped>
.background {
  background-image: url("../static/background.png");
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: repeat repeat;
}

.cardLayout {
  height: 100vh !important;
}

.linkUser {
  display: block !important;
  box-sizing: border-box;
  position: fixed !important;
  bottom: 16px !important;
  right: 0;
  left: 0;
  width: 100%;
}
</style>
