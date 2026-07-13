export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter(Boolean)
    .map(x => x.trim())
    .join(' ');
}
