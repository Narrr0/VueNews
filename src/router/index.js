import AskView  from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

//import createListView from '../views/CreateListView.js';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      //component: createListView('NewView'),
      component: NewsView,
      beforeEnter: (to, from ,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            //console.log('fetched');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, 
    {
      path: '/ask',
      name: 'ask',
      //component: createListView('AskView'),
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            //console.log('fetched');
            next();
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      //component: createListView('JobsView'),
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            //console.log('fetched');
            next();
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_USER', to.name)
          .then(() => {
            //console.log('fetched');
            next();
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
    {
      path: '/ask/:id',
      name: 'question',
      component: ItemView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_ASKING', to.name)
          .then(() => {
            //console.log('fetched');
            next();
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
  ]
})