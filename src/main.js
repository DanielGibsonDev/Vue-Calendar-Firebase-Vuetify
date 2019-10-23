import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC1lkdPzXEQdBlCO18B1nkThfkylFPpLeA",
  authDomain: "vue-calendar-5e6b9.firebaseapp.com",
  databaseURL: "https://vue-calendar-5e6b9.firebaseio.com",
  projectId: "vue-calendar-5e6b9",
  storageBucket: "vue-calendar-5e6b9.appspot.com",
  messagingSenderId: "936612865416",
  appId: "1:936612865416:web:f455ee7830b9abb9e1063d"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
