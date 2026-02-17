// ICONOS NORMAL / ACTIVO (aunque aún no existan físicamente).
// Solo asegúrate de crear los PNG más adelante en las rutas indicadas.

import iconHome from "@/shared/img/home-a.png";
import iconHomeActive from "@/shared/img/home-v.png";

import iconDashboard from "@/shared/img/dashboard-a.png";
import iconDashboardActive from "@/shared/img/dashboard-v.png";

import iconTools from "@/shared/img/herramientas-a.png";
import iconToolsActive from "@/shared/img/herramientas-v.png";

import iconScan from "@/shared/img/escaneo-red-a.png";
import iconScanActive from "@/shared/img/escaneo-red-v.png";

import iconToken from "@/shared/img/token-a.png";
import iconTokenActive from "@/shared/img/token-v.png";

import iconVuln from "@/shared/img/analisis-vulnerabilidades-a.png";
import iconVulnActive from "@/shared/img/analisis-vulnerabilidades-v.png";

import iconDetect from "@/shared/img/deteccion-riesgos-a.png";
import iconDetectActive from "@/shared/img/deteccion-riesgos-v.png";

import iconRisk from "@/shared/img/gestion-riesgo-a.png";
import iconRiskActive from "@/shared/img/gestion-riesgo-v.png";

export default [
  { label: "Home", to: "/home", icon: iconHome, iconActive: iconHomeActive },
  { label: "Dashboard", to: "/dashboard", icon: iconDashboard, iconActive: iconDashboardActive },
  { label: "Herramientas", to: "/herramientas", icon: iconTools, iconActive: iconToolsActive },
  { label: "Escaneo de Red", to: "/escaneo-red", icon: iconScan, iconActive: iconScanActive },
  { label: "Tokens", to: "/tokens", icon: iconToken, iconActive: iconTokenActive },
  { label: "Análisis de Vulnerabilidades", to: "/analisis-vulnerabilidades", icon: iconVuln, iconActive: iconVulnActive },
  { label: "Detección de Riesgos", to: "/deteccion-riesgos", icon: iconDetect, iconActive: iconDetectActive },
  { label: "Gestión de Riesgos", to: "/gestion-riesgos", icon: iconRisk, iconActive: iconRiskActive }
];
