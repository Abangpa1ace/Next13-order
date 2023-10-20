
interface Params {
  price: number;
  count: number;
}

export default function getTotalPrice({ price, count }: Params) {
  return price * count;
}