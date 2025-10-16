// ==============================================
// Purpose: global cart state (client-side only).
// Notes: keep logic tiny; server will re-validate before checkout.
// ==============================================
import type { Product } from '~/data/products'
import { products } from '~/data/products'

export type CartLine = { productId: string; qty: number }

export const useCart = () => {
  const lines = useState<CartLine[]>('cart:lines', () => [])
  const open = useState<boolean>('cart:open', () => false)

  const items = computed(() => {
    return lines.value
      .map((l) => {
        const p = products.find((pp) => pp.id === l.productId)
        if (!p) return null
        return { product: p, qty: Math.max(1, l.qty) }
      })
      .filter(Boolean) as { product: Product; qty: number }[]
  })

  const subtotalCents = computed(() =>
    items.value.reduce((sum, { product, qty }) => sum + product.priceCents * qty, 0)
  )

  function add(productId: string, qty = 1) {
    const i = lines.value.findIndex((l) => l.productId === productId)
    if (i >= 0 && lines.value[i]) lines.value[i].qty += qty
    else lines.value.push({ productId, qty: Math.max(1, qty) })
    open.value = true
  }

  function remove(productId: string) {
    lines.value = lines.value.filter((l) => l.productId !== productId)
  }

  function setQty(productId: string, qty: number) {
    if (qty <= 0) return remove(productId)
    const i = lines.value.findIndex((l) => l.productId === productId)
    if (i >= 0 && lines.value[i]) lines.value[i].qty = Math.floor(qty)
  }

  function clear() {
    lines.value = []
  }

  return { lines, items, subtotalCents, add, remove, setQty, clear, open }
}
