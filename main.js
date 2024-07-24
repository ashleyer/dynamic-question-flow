const Home = {
  template: `<div><h2>Test Vue App</h2></div>`
};

const routes = [
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue!'
  }
});