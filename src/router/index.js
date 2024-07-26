import Vue from 'vue';
import VueRouter from 'vue-router';
import PersonalInformation from '@/components/PersonalInformation.vue';
import PartnerInformation from '@/components/PartnerInformation.vue';
import ChildrenInformation from '@/components/ChildrenInformation.vue';
import PrimaryResidence from '@/components/PrimaryResidence.vue';
import OtherRealEstate from '@/components/OtherRealEstate.vue';
import RealEstateValue from '@/components/RealEstateValue.vue';
import PreviewPage from '@/components/PreviewPage.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'PersonalInformation', component: PersonalInformation },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/partner-information', name: 'PartnerInformation', component: PartnerInformation },
  { path: '/children-information', name: 'ChildrenInformation', component: ChildrenInformation },
  { path: '/primary-residence', name: 'PrimaryResidence', component: PrimaryResidence },
  { path: '/other-real-estate', name: 'OtherRealEstate', component: OtherRealEstate },
  { path: '/real-estate-value', name: 'RealEstateValue', component: RealEstateValue },
  { path: '/preview', name: 'PreviewPage', component: PreviewPage }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;