<template>
  <v-app light class="background">
    <v-content>
      <v-container fluid>
        <v-layout wrap row class="">
          <v-flex xs12 md6 lg4 offset-lg4 offset-md3>
            <v-card class="cardLayout">
              <v-toolbar color="primary" dark tabs>
                <v-toolbar-title class="white--text"
                  >Enviar Whatsapp</v-toolbar-title
                >
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-tabs
                  color="primary"
                  slot="extension"
                  slider-color="yellow"
                  v-model="model"
                  grow
                >
                  <v-tab href="#tab-1"> ENVÍO </v-tab>
                  <!--<v-tab href="#tab-2">
                Masivo
              </v-tab> -->
                  <v-tab href="#tab-3"> Configuración </v-tab>
                </v-tabs>
              </v-toolbar>
              <v-tabs-items v-model="model" touchless>
                <!-- Send Message -->
                <v-tab-item id="tab-1">
                  <send-whatsapp :code="code"></send-whatsapp>
                </v-tab-item>
                <!-- Send Message -->
                <!--<v-tab-item id="tab-2">
              <advance-send-whatsapp :code="code"></advance-send-whatsapp>
            </v-tab-item> -->
                <v-tab-item id="tab-3">
                  <!-- Setting tab -->
                  <v-card flat>
                    <v-card-text>
                      <setting-component :code="code"></setting-component>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
              <v-card-actions>
                <v-spacer></v-spacer>
                <strong class="caption">
                  Powered by
                  <v-icon color="yellow">mdi-lightbulb-on-outline by </v-icon
                  ><a href="https://innout.pe">innout.pe</a>
                </strong>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { code } from "./code.js"; //json of country dial
import SendWhatsapp from "./components/SendWhatsapp";
import AdvanceSendWhatsapp from "./components/AdvanceSendWhatsapp";
import SettingComponent from "./components/SettingComponent";
import "vue-awesome/icons/tablet";
import Icon from "vue-awesome/components/Icon";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  components: {
    Icon,
    SendWhatsapp,
    AdvanceSendWhatsapp,
    SettingComponent,
  },
  data() {
    return {
      model: null,
      code: code,
    };
  },

};
</script>
<style scoped >
.v-content__wrap {
  height: 100vh !important;
}
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
