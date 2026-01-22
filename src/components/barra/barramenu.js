// ICONOS NORMAL / ACTIVO (aunque aún no existan físicamente).
// Solo asegúrate de crear los PNG más adelante en las rutas indicadas.

import iconHome from "@//assets/img/barra/inicio-a.png";
import iconHomeActive from "@//assets/img/barra/inicio-v.png";

import iconDashboard from "@//assets/img/barra/dashboard-a.png";
import iconDashboardActive from "@//assets/img/barra/dashboard-v.png";

import iconTools from "@//assets/img/barra/herramientas-a.png";
import iconToolsActive from "@//assets/img/barra/herramientas-v.png";

import iconScan from "@//assets/img/barra/escaneo-red-a.png";
import iconScanActive from "@//assets/img/barra/escaneo-red-v.png";

import iconToken from "@//assets/img/barra/token-a.png";
import iconTokenActive from "@//assets/img/barra/token-v.png";

import iconVuln from "@//assets/img/barra/analisis-vulnerabilidades-a.png";
import iconVulnActive from "@//assets/img/barra/analisis-vulnerabilidades-v.png";

import iconDetect from "@//assets/img/barra/deteccion-riesgos-a.png";
import iconDetectActive from "@//assets/img/barra/deteccion-riesgos-v.png";

import iconRisk from "@//assets/img/barra/gestion-riesgo-a.png";
import iconRiskActive from "@//assets/img/barra/gestion-riesgo-v.png";

export default [
  { label: "Inicio", to: "/Inicio", icon: iconHome, iconActive: iconHomeActive },
  { label: "Dashboard", to: "/Dashboard", icon: iconDashboard, iconActive: iconDashboardActive },
  { label: "Herramientas", to: "/Herramientas", icon: iconTools, iconActive: iconToolsActive },
  { label: "Escaneo de Red", to: "/Escaneo-Red", icon: iconScan, iconActive: iconScanActive },
  { label: "Tokens", to: "/Tokens", icon: iconToken, iconActive: iconTokenActive },
  { label: "Análisis de Vulnerabilidades", to: "/Analisis-Vulnerabilidades", icon: iconVuln, iconActive: iconVulnActive },
  { label: "Detección de Riesgos", to: "/Deteccion-Riesgos", icon: iconDetect, iconActive: iconDetectActive },
  { label: "Gestión de Riesgos", to: "/Gestion-Riesgos", icon: iconRisk, iconActive: iconRiskActive }
];
