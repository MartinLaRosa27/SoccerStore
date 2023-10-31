export function formatPrecio(precio: number) {
  return precio.toFixed(2).replace(".", ",");
}
