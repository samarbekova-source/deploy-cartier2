export function calcTotalPrice(jewelry) {
  let totalPrice = 0;
  jewelry.forEach((item) => {
    totalPrice += +item.subPrice;
  });
  return totalPrice;
}

export function calcSubPrice(product) {
  return +product.count * +product.item.price;
}
