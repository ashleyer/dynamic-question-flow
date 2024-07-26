import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PersonalInformation from './components/PersonalInformation.vue';
import PartnerInformation from './components/PartnerInformation.vue';
import ChildrenInformation from './components/ChildrenInformation.vue';
import PrimaryResidence from './components/PrimaryResidence.vue';
import OtherRealEstate from './components/OtherRealEstate.vue';
import RealEstateValue from './components/RealEstateValue.vue';
import PreviewPage from './components/PreviewPage.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PersonalInformation },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/partner-information', component: PartnerInformation },
  { path: '/children-information', component: ChildrenInformation },
  { path: '/primary-residence', component: PrimaryResidence },
  { path: '/other-real-estate', component: OtherRealEstate },
  { path: '/real-estate-value', component: RealEstateValue },
  { path: '/preview', component: PreviewPage }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  data: {
    formData: {},
    totalSteps: 7
  },
  render: h => h(App)
}).$mount('#app');