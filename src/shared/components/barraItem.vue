<template>
  <router-link
    :to="item.to"
    class="nav-item"
    :class="{ active: isActive, collapsed: isCollapsed }"
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
.nav-item span {
  display: block;
  text-align: center;
  width: 100%;
}

.nav-item:hover {
  background-color: #60bb32;
}

.nav-item.active {
  background-color: #346688;
}
.icon {
  width: 64px;
  height: 64px;
}

.nav-item.collapsed {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
</style>
