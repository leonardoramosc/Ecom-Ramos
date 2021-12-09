export const calcPriceWithDiscount = (item) => {
  if (item.discountPercentage) {
    const discountAmount = (item.discountPercentage * item.price) / 100;
    const priceWithDiscount = item.price - discountAmount;
    const result = Math.round(priceWithDiscount * 100) / 100;
    return result;
  }

  return item.price;
};