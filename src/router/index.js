import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../components/Notes.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('../components/Note.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
