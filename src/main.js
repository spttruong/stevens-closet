import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import store from './store';

import HomePage from './components/pages/HomePage.vue'
import AllOutfitsPage from './components/pages/AllOutfitsPage.vue';
import OutfitPostPage from './components/pages/OutfitPostPage.vue';
import FilteredOutfitsPage from './components/pages/FilteredOutfitsPage.vue'
import FavoriteOutfitsPage from './components/pages/FavoriteOutfitsPage.vue';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/outfits", component: AllOutfitsPage, name: "all outfits" },
  { path: "/outfits/:id", component: OutfitPostPage, name: "outfit", props: true },
  { path: "/filtered", component: FilteredOutfitsPage, name: "filtered outfits" },
  { path: "/favorites", component: FavoriteOutfitsPage, name: "favorites" }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app');
