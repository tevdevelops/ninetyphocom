<template>
  <aside class="drawer" :class="{ 'drawer--open': open }" aria-label="Cart">
    <header class="drawer__header">
      <h3>Cart</h3>
      <button @click="() => (open = false)" aria-label="Close cart">×</button>
    </header>

    <div v-if="items.length" class="drawer__body">
      <div v-for="{ product, qty } in items" :key="product.id" class="line">
        <img :src="product.image" :alt="product.title" />
        <div class="line__info">
          <div class="line__title">{{ product.title }}</div>
          <div class="line__price">{{ formatCents(product.priceCents) }}</div>
          <div class="line__qty">
            <button @click="setQty(product.id, qty - 1)">−</button>
            <input
              :value="qty"
              @input="
                setQty(product.id, +($event.target as HTMLInputElement).value)
              "
            />
            <button @click="setQty(product.id, qty + 1)">+</button>
          </div>
          <button class="line__remove" @click="remove(product.id)">
            Remove
          </button>
        </div>
      </div>

      <footer class="drawer__footer">
        <div class="totals">
          <span>Subtotal</span>
          <strong>{{ formatCents(subtotalCents) }}</strong>
        </div>
        <NuxtLink to="/checkout" class="checkout-btn">
          Proceed to Checkout
        </NuxtLink>
      </footer>
    </div>

    <!-- <template #empty>
      <div class="drawer__empty">Your cart is empty.</div>
    </template> -->
  </aside>
</template>

<script setup lang="ts">
import { formatCents } from '~/utils/money'

const { items, subtotalCents, remove, setQty, open } = useCart()
</script>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 340px;
  max-width: 90vw;
  background: #fff;
  box-shadow: -6px 0 16px rgba(0, 0, 0, 0.06);
  transform: translateX(100%);
  transition: transform 0.25s;
  display: grid;
  grid-template-rows: auto 1fr;
  z-index: 60;
}
.drawer--open {
  transform: translateX(0);
}
.drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
.drawer__body {
  padding: 0.75rem 1rem;
  overflow: auto;
  display: grid;
  gap: 0.75rem;
}
.line {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 0.75rem;
}
.line img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 0.25rem;
}
.line__title {
  font-weight: 600;
}
.line__qty {
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
}
.line__qty input {
  width: 48px;
  text-align: center;
}
.line__remove {
  margin-top: 0.25rem;
  background: none;
  border: none;
  color: #c00;
  cursor: pointer;
}
.drawer__footer {
  margin-top: auto;
  border-top: 1px solid #eee;
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
}
.totals {
  display: flex;
  justify-content: space-between;
}
.checkout-btn {
  text-align: center;
  padding: 0.625rem;
  background: #111;
  color: #fff;
  border-radius: 0.375rem;
}
.drawer__empty {
  padding: 1rem;
  color: #666;
}
</style>
