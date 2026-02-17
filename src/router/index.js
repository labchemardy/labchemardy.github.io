import { createRouter, createWebHistory } from 'vue-router'
import Home from '../modules/home/components/home.vue'
import Dashboard from '../modules/dashboard/components/dashboard.vue'
import Tokens from '../modules/tokens/components/tokens.vue'
import EscaneoRed from '../modules/escaneored/components/escaneored.vue'
import DeteccionRiesgos from '../modules/deteccionriesgos/components/deteccionriesgos.vue'
import GestionRiesgos from '../modules/gestionriesgos/components/gestionriesgos.vue'
import Herramientas from '../modules/herramientas/components/herramientas.vue'
import AnalisisVulnerabilidades from '../modules/analisisvulnerabilidades/components/analisisvulnerabilidades.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tokens',
    name: 'Tokens',
    component: Tokens
  },
  {
    path: '/escaneo-red',
    name: 'EscaneoRed',
    component: EscaneoRed
  },
  {
    path: '/deteccion-riesgos',
    name: 'DeteccionRiesgos',
    component: DeteccionRiesgos
  },
  {
    path: '/gestion-riesgos',
    name: 'GestionRiesgos',
    component: GestionRiesgos
  },
  {
    path: '/herramientas',
    name: 'Herramientas',
    component: Herramientas
  },
  {
    path: '/analisis-vulnerabilidades',
    name: 'AnalisisVulnerabilidades',
    component: AnalisisVulnerabilidades
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
