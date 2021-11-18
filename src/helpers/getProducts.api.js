import mockApiCall from "./mockApiCall"

const products = [
  {
    id: 1,
    title: "Zapatillas Fila Dash",
    description: "Zapatillas Fila Trend 2.0 0699 F01st004023 139 Dash",
    price: 6799,
    img: "https://http2.mlstatic.com/D_NQ_NP_827536-MLA47147524783_082021-W.webp",
  },
  {
    id: 2,
    title: "Zapatillas Jaguar",
    description: "Zapatillas Jaguar Oficial Deportiva Art. # 918 Urbana Hombre Y Mujer",
    price: 2770,
    img: "https://http2.mlstatic.com/D_NQ_NP_753883-MLA41787404474_052020-W.webp",
  },
  {
    id: 3,
    title: "Zapatillas Fila ",
    description: "Zapatillas Fila Discovery",
    price: 6490,
    img: "https://http2.mlstatic.com/D_NQ_NP_708000-MLA43566860313_092020-W.webp",
  },
  {
    id: 4,
    title: "Zapatillas Nike",
    description: "Zapatillas Nike trend 2.0 0680",
    price: 7280,
    img: "https://http2.mlstatic.com/D_NQ_NP_689552-MLA47890166107_102021-W.webp",
  },
  {
    id: 5,
    title: "Zapatillas Puma",
    description: "Zapatillas Puma electron E",
    price: 9899,
    img: "https://http2.mlstatic.com/D_NQ_NP_946754-MLA47890166113_102021-W.webp",
  },
  {
    id: 6,
    title: "Zapatillas Topper",
    description: "Zapatillas Topper Jiro Negro",
    price: 4959,
    img: "https://http2.mlstatic.com/D_NQ_NP_731677-MLA46768302385_072021-W.webp",
  },
]

const getProducts = mockApiCall(products, 2000);

export default getProducts;