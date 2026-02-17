<template>
  <div class="app-container">
    <sidebar-component
      v-if="showSidebar"
      :is-collapsed.sync="isCollapsed"
      @toggle-sidebar="toggleSidebar"
    />
    <main class="main-content" :class="{ 'no-sidebar': !showSidebar }">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import SidebarComponent from './barra.vue';

const route = useRoute();
const isCollapsed = ref(false);

const showSidebar = computed(() => route.path !== '/home');

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value;
}

function handleResize() {
  if (window.innerWidth <= 768) {
    isCollapsed.value = true;
  } else {
    isCollapsed.value = false;
  }
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  margin: 0;
}

.main-content {
  margin-left: 250px;
  padding: 2rem;
  width: calc(100% - 250px);
  transition: margin-left 0.3s, width 0.3s;
  margin-top: 0;
  margin-bottom: 0;
}

.main-content.no-sidebar {
  margin-left: 0;
  width: 100%;
  padding: 2rem;
}

.sidebar.collapsed + .main-content {
  margin-left: 60px;
  width: calc(100% - 60px);
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 60px;
    width: calc(100% - 60px);
  }

  .sidebar.collapsed + .main-content {
    margin-left: 250px;
    width: calc(100% - 250px);
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .main-content {
    margin-left: 250px;
    width: calc(100% - 250px);
  }

  .sidebar.collapsed + .main-content {
    margin-left: 60px;
    width: calc(100% - 60px);
  }
}

@media (min-width: 1025px) {
  .main-content {
    margin-left: 250px;
    width: calc(100% - 250px);
  }

  .sidebar.collapsed + .main-content {
    margin-left: 60px;
    width: calc(100% - 60px);
  }
}
</style>
