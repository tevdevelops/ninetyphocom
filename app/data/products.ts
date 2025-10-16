// ==============================================
// Purpose: tiny typed catalog to start; swap to CMS later.
// ==============================================
export type Product = {
  id: string
  title: string
  slug: string
  priceCents: number
  image: string
  printfulVariantId: number
  description?: string
}

export const products: Product[] = [
  {
    id: 'tee-classic',
    title: 'Myles Cream Tee',
    slug: 'myles-cream-tee',
    priceCents: 2500,
    image: '/images/tee.jpg',
    printfulVariantId: 4011,
    description: 'Classic tee with logo',
  },
  {
    id: 'hat-logo',
    title: 'Myles Logo Hat',
    slug: 'myles-logo-hat',
    priceCents: 3000,
    image: '/images/hat.jpg',
    printfulVariantId: 5612,
  },
  {
    id: 'sticker-pack',
    title: 'Sticker Pack',
    slug: 'sticker-pack',
    priceCents: 800,
    image: '/images/stickers.jpg',
    printfulVariantId: 7021,
  },
  {
    id: 'hoodie',
    title: 'Hoodie',
    slug: 'hoodie',
    priceCents: 4800,
    image: '/images/hoodie.jpg',
    printfulVariantId: 4902,
  },
  {
    id: 'poster',
    title: 'Tour Poster',
    slug: 'tour-poster',
    priceCents: 1800,
    image: '/images/poster.jpg',
    printfulVariantId: 9901,
  },
]
