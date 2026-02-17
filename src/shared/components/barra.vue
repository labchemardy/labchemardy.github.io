<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">

    <!-- LOGO -->
    <div class="sidebar-header">
      <img 
        :src="isCollapsed ? logoCollapse : logoExpand" 
        alt="Logo del sistema"
        class="logo" 
      />
    </div>

    <!-- MENÚ -->
    <nav>
      <SidebarItem
        v-for="item in menuItems"
        :key="item.to"
        :item="item"
        :is-collapsed="isCollapsed"
      />
    </nav>

    <!-- BOTÓN COLAPSAR -->
    <div class="sidebar-footer">
      <button @click="$emit('toggle-sidebar')" class="toggle-btn">
        <img :src="isCollapsed ? expandIcon : collapseIcon" alt="Toggle Sidebar" />
      </button>
    </div>

  </aside>
</template>

<script setup>
import SidebarItem from "./barraItem.vue";
import menuItems from "../scripts/barramenu.js";

// LOGOS
import logoExpand from "@/shared/img/logo_r.png";   
import logoCollapse from "@/shared/img/logo_c.png"; 

// FLECHAS
import expandIcon from "@/shared/img/flecha_r.png";  
import collapseIcon from "@/shared/img/flecha_v.png";

defineProps({
  isCollapsed: Boolean
});

defineEmits(["toggle-sidebar"]);
</script>

<style scoped>
.sidebar {
  width: 210px;
  background-color: #273623;
  color: #ecf0f1;
  transition: width 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;

  /* No se hace scroll toda la barra: solo el menú */
  overflow: hidden;
}

.sidebar.collapsed {
  width: 90px;
}

/* HEADER FIJO */
.sidebar-header {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0.3rem;
}

/* MENÚ SCROLLEABLE */
nav {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px; /* evita que el scrollbar tape texto/iconos */
}

/* Scroll bonito (opcional) */
nav::-webkit-scrollbar {
  width: 8px;
}

nav::-webkit-scrollbar-thumb {
  background: #4a4a4a;
  border-radius: 4px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #666;
}

/* LOGO */
.logo {
  max-width: 100%;
  height: auto;
  transition: all 0.3s;
}

/* FOOTER FIJO */
.sidebar-footer {
  flex-shrink: 0;
  margin-top: auto;
  display: flex;
  justify-content: right;
  transition: justify-content 0.3s;
}

.sidebar.collapsed .sidebar-footer {
  justify-content: left;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
}

.toggle-btn img {
  width: 50px;
  height: 25px;
  transition: transform 0.3s;
}
</style>
