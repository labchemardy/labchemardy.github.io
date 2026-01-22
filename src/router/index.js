import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Dashboard from '../views/dashboard.vue';
import EscaneoRed from '../views/escaneored.vue';
import Tokens from '../views/tokens.vue';
import DeteccionRiesgos from '../views/deteccionriesgos.vue';
import AnalisisVulnerabilidades from '../views/analisisvulnerabilidades.vue';
import GestionRiesgos from '../views/gestionRiesgos.vue';
import Herramientas from '../views/herramientas.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/herramientas', component: Herramientas  },
  { path: '/analisis-vulnerabilidades', component: AnalisisVulnerabilidades },
  { path: '/escaneo-red', component: EscaneoRed },
  { path: '/tokens', component: Tokens },
  { path: '/deteccion-riesgos', component: DeteccionRiesgos },
  { path: '/gestion-riesgos', component: GestionRiesgos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;