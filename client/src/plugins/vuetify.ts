import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        shade6: "#391B18",
        shade5: "#5A2A27",
        shade4: "#8D5B4C",
        shade3: "#5C4742",
        shade2: "#816F67",
        shade1: "#C4BBAF",
      },
    },
  },
});
