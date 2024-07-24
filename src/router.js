import Vue from "vue";
import VueRouter from "vue-router";
import PersonalInfo from "./components/PersonalInfo.vue";
import PartnerInfo from "./components/PartnerInfo.vue";
import ChildrenInfo from "./components/ChildrenInfo.vue";
import ResidenceInfo from "./components/ResidenceInfo.vue";
import OtherRealEstate from "./components/OtherRealEstate.vue";
import Preview from "./components/Preview.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/personal" },
  { path: "/personal", component: PersonalInfo },
  { path: "/partner", component: PartnerInfo },
  { path: "/children", component: ChildrenInfo },
  { path: "/residence", component: ResidenceInfo },
  { path: "/real-estate", component: OtherRealEstate },
  { path: "/preview", component: Preview },
];

const router = new VueRouter({
  routes,
});

export default router;
