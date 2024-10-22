export function formatoLibras(numero) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    currencyDisplay: "symbol",
  }).format(numero);
}
