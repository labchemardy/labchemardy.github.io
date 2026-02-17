<template>
  <div class="home-container">
    <h1>Bienvenido a </h1>
    <img :src="logoExpand" alt="Logo" class="home-logo" />
    <p>Panel de inicio y acceso rápido a herramientas.</p>

    <section class="cards-grid">
      <div v-for="item in menuItems" :key="item.to" class="card" @click="goTo(item.to)">
        <img :src="item.icon" alt="" class="card-img" />
        <div class="card-body">
          <h3>{{ item.label }}</h3>
          <p class="card-desc">{{ item.desc || 'Accede a la herramienta' }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import logoExpand from '@/shared/img/logo_r.png';
import menu from '../../../shared/scripts/barramenu.js';

const router = useRouter();

const menuItems = menu.filter(i => i.to && i.label).map(i => ({
  ...i,
  desc: i.desc || ''
}));

function goTo(route) {
  router.push(route);
}
</script>

<style scoped>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
    min-height: calc(100vh - 100px);
  }

  .home-logo {
    width: 60%;
    margin-bottom: 1rem;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1100px;
    margin-top: 2rem;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: transform 0.12s ease-in-out;
  }

  .card:hover { transform: translateY(-4px); }

  .card-img { width: 64px; height: 64px; object-fit: contain; }
  .card-body h3 { margin: 0; font-size: 1.05rem; }
  .card-desc { margin: 0.25rem 0 0; color: #666; font-size: 0.9rem; }

  @media (max-width: 600px) {
    .cards-grid { grid-template-columns: repeat(1, 1fr); }
  }
  </style>
