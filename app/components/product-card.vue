<!-- ============================================
Purpose: small card to display + add to cart.
================================================ -->
<template>
  <article class="product-card">
    <img :src="product.image" :alt="product.title" class="product-card__img" />
    <h3 class="product-card__title">{{ product.title }}</h3>
    <p class="product-card__price">{{ formatCents(product.priceCents) }}</p>
    <button class="product-card__btn" @click="add(product.id)">
      Add to cart
    </button>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'
import { formatCents } from '~/utils/money'

interface Props {
  product: Product
}
defineProps<Props>()

const { add } = useCart()
</script>

<style scoped>
.product-card {
  display: grid;
  gap: 0.5rem;
  border: 1px solid #e6e6e6;
  padding: 1rem;
  border-radius: 0.5rem;
}
.product-card__img {
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
}
.product-card__title {
  margin: 0;
  font-weight: 600;
}
.product-card__price {
  margin: 0;
  color: #333;
}
.product-card__btn {
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #111;
  background: #111;
  color: #fff;
  cursor: pointer;
}
.product-card__btn:hover {
  background: #000;
}
</style>
