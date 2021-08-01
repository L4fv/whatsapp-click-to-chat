<template>
  <form v-on:submit.prevent="sendWhatsapp">
    <v-card flat>
      <v-card-text>
        <v-select
          readonly
          :items="code"
          item-value="callingCode"
          v-model="country.default"
          label="País"
          item-text="name"
          :error-messages="errors.collect('country')"
          v-validate="'required'"
          data-vv-name="country"
          required
          return-object
        ></v-select>
        <v-text-field
          type="number"
          v-model="phoneNumber"
          auto-focus
          placeholder="987654321"
          label="Número"
          :error-messages="errors.collect('phoneNumber')"
          v-validate="'required|numeric'"
          data-vv-name="phoneNumber"
          required
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          label="Usar Mensaje Predeterminado"
        ></v-checkbox>
        <v-textarea
          v-model="mensaje"
          :label="label"
          placeholder="Hello ..."
          auto-grow
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-layout wrap row text-xs-center>
          <v-flex xs6 offset-xs3>
            <v-btn block class="primary" type="submit" dark center>
              <v-icon class="mr-2" dark>fab fa-whatsapp</v-icon>Enviar Mensaje
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <div class="ad-container">
              <InFeedAdsense
                :data-ad-layout-key="adsLayout"
                :data-ad-client="adsIdClient"
                :data-ad-slot="adsSlot"
              >
              </InFeedAdsense>
            </div>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </form>
</template>
<script>
import { mapState } from 'vuex';
export default {
  $_veeValidate: {
    validator: 'new'
  },
  props: ['code'],

  data() {
    return {
      checkbox: false,
      phoneNumber: null,
      mensaje: ''
    };
  },
  computed: {
    adsIdClient() {
      return process.env.VUE_APP_BASE_ADSENSE_ID;
    },
    adsLayout() {
      return process.env.VUE_APP_BASE_ADSENSE_LAYOUT;
    },
    adsSlot() {
      return process.env.VUE_APP_BASE_ADSENSE_SLOT;
    },
    label() {
      return `Enviar mensaje a +${this.country.default.callingCode} ${
        this.phoneNumber ? this.phoneNumber : ''
      }`;
    },
    ...mapState(['country', 'message'])
  },
  watch: {
    checkbox(val) {
      if (val) {
        this.mensaje = this.message;
      } else {
        this.mensaje = '';
      }
    },
    message() {
      if (this.checkbox) {
        this.mensaje = this.message;
      }
    }
  },
  methods: {
    sendWhatsapp() {
      /* this is the magic */
      window.open(
        `https://api.whatsapp.com/send?phone=${
          this.country.default.callingCode
        }${this.phoneNumber}&text=${this.mensaje}`,
        '_blank'
      );
    }
  },
  mounted() {
    this.checkbox = true;
  }
};
</script>
