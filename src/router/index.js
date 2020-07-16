import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '../views/Skills'

/**
 * Pour creer une nouvelle page: 
 *  - Creer un composant dans le dossier views (comme Skills.vue)
 *  - l'importer ici et creer sa route dans le tableau en dessous
 *  - Dans composants/Menu.vue ajouter le path et l'icon dans le tableau items
 */
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/competences',
    name: 'Skills',
    component: Skills
  }
]

const router = new VueRouter({
  routes
})

export default router
