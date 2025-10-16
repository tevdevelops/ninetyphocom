<!-- ============================================

Purpose: simple products grid + cart drawer.
================================================ -->
<template>
  <section class="container">
    <header class="hero">
      <h1>All Products</h1>
      <button @click="open = true">Open Cart ({{ items.length }})</button>
    </header>

    <div class="grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>

    <CartDrawer />
  </section>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
const { items, open } = useCart()
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
