<template>
  <router-link
    :to="item.to"
    class="nav-item"
    :class="{ active: isActive }"
    @click="$emit('click')"
  >
    <!-- ICONO DINÁMICO -->
    <img
      :src="currentIcon"
      class="icon"
      :title="isCollapsed ? item.label : ''"   
      />

     <!-- LABEL visible solo si no está colapsado -->
    <span v-if="!isCollapsed">{{ item.label }}</span>
  </router-link>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  item: Object,
  isCollapsed: Boolean
});

const route = useRoute();

const isActive = computed(() => route.path === props.item.to);

const currentIcon = computed(() =>
  isActive.value ? props.item.iconActive : props.item.icon
);
</script>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.3rem 0.3rem;
  color: #ecf0f1;
  text-decoration: none;
  transition: background 0.25s;
}

.nav-item:hover {
  background-color: #60bb32;
}

.nav-item.active {
  background-color: #273623;
}
.icon {
  width: 80px;
  height: 80px;
}

:deep(.sidebar.collapsed) .nav-item {
  justify-content: center;
}
</style>
