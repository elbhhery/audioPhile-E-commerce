export default function priceFormat(price: number): string {
  return `$ ${price.toLocaleString()}`;
}
