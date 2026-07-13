export function formatPrice(price) {
  if (typeof price !== 'number') return '';
  if (price >= 1000) {
    return `Rp ${(price / 1000).toString().replace(/\.0$/, '')}k`;
  }
  return `Rp ${price}`;
}
