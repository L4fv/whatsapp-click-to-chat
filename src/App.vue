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
              <v-tab href="#tab-1" >
                Simple
              </v-tab>
              <v-tab href="#tab-2">
                Masivo
              </v-tab>
              <v-tab href="#tab-3">
                Configuración
              </v-tab>
            </v-tabs>
          </v-toolbar>
          <v-tabs-items v-model="model" touchless>
            <v-tab-item id="tab-1">
              <!-- Send Message -->
              <send-whatsapp :code="code"></send-whatsapp>
            </v-tab-item>
            <v-tab-item id="tab-2">
              <!-- Send Message -->
              <advance-send-whatsapp :code="code"></advance-send-whatsapp>
            </v-tab-item>
            <v-tab-item id="tab-3">
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
      <v-flex xs12 text-xs-center v-if="model==='tab-3'">
        <div class="linkUser">
          GitHub Repository:
          <a href="https://github.com/L4fv/Vue-demo-send-whatsapp" target="_blank">GitHub</a>
          <br/> Other project:
          <a href="https://trivelapp.com" target="_blank" class="primary--text">Trivleapp</a>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import { code } from "./code.js"; //json of country dial
import SendWhatsapp from "./components/SendWhatsapp";
import AdvanceSendWhatsapp from "./components/AdvanceSendWhatsapp";
import SettingComponent from "./components/SettingComponent";
import "vue-awesome/icons/tablet"
import Icon from "vue-awesome/components/Icon";

export default {
  components: {
    Icon,
    SendWhatsapp,
    AdvanceSendWhatsapp,
    SettingComponent
  },
  data() {
    return {
      model: null,
      code: code
    };
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
