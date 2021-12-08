import numeral from "numeral";
import mockApiCall from "./mockApiCall"
import products from "./products";

export const getProducts = mockApiCall(products, 2000);

export const getMostSelledProducts = ((top=5) => {
  const sortProductsBySales = (products) => {
    return products.sort((a, b) => b.sold - a.sold);
  }
  
  const topMostSelled = sortProductsBySales(products).filter((_p, index) => index < top);

  return mockApiCall(topMostSelled, 2000);
});

export const getProductById = ((id) => {
  const product = products.find(p => p.id === id);

  return mockApiCall(product, 2000);
});

export const getProductsByCategory = (category) => {
  const productsByCategory = products.filter(p => p.category.toLowerCase() === category.toLowerCase());

  return mockApiCall(productsByCategory, 2000);
}

export const calcPriceWithDiscount = (item) => {
  if (item.discountPercentage) {
    const discountAmount = (item.discountPercentage * item.price) / 100;
    const priceWithDiscount = item.price - discountAmount;
    const result = Math.round(priceWithDiscount * 100) / 100;
    return result;
  }

  return item.price;
};