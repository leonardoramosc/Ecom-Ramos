const products = [
  {
    id: 1,
    title: "Xiaomi Mi 11 Lite 5G Dual SIM 128 GB",
    price: 79919,
    img: "https://http2.mlstatic.com/D_NQ_NP_622257-MLA47500407340_092021-V.webp",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_816387-MLA47500407339_092021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_728801-MLA47500351356_092021-O.webp",
    ],
    stock: 100,
    seller: "Xiaomi",
    description:
      "Fotografía profesional en tu bolsillo Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
    category: "celulares",
    sold: 10
  },
  {
    id: 2,
    title: "Moto G20 64 GB rosa flamingo 4 GB RAM",
    price: 31999,
    img: "https://http2.mlstatic.com/D_NQ_NP_639203-MLA48270995115_112021-O.webp",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_688123-MLA47152932058_082021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_727580-MLA48271038021_112021-O.webp",
    ],
    stock: 30,
    seller: "Motorolla",
    description:
      "Mayor rendimiento Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.",
    category: "celulares",
    sold: 15
  },
  {
    id: 3,
    title: "Pc Armada | Intel Core I7 9700 16gb Ssd 480gb Wifi D7",
    price: 109998,
    img: "https://http2.mlstatic.com/D_NQ_NP_758556-MLA31031635182_062019-O.webp",
    images: [],
    stock: 3,
    seller: "Microsoft",
    description: `GABINETE KIT\nINCLUYE TECLADO ,MOUSE Y PARLANTES\nMOTHERBOARD H310M\nMICRO: INTEL i7 9700F\nMEMORIA RAM: DDR4 16GB\nDISCO SOLIDO: SSD 480GB\nPLACA DE VIDEO GEFORCE GT210\nADAPTADOR USB WIFI\nHDMI Y DVI\nUSB 3.0 2.0`,
    category: "computación",
    sold: 20
  },
  {
    id: 4,
    title: "Pc Armada Slim Intel Amd Dual Core Hd 1tb 8gb Ram Lol Hdmi",
    price: 47499,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_991401-MLA31351342525_072019-F.webp",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_921765-MLA46578683848_072021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_755518-MLA32911466181_112019-O.webp",
    ],
    stock: 12,
    seller: "Acer",
    description: "La mejor pc para tus trabajos de oficina",
    category: "computación",
    sold: 25
  },
  {
    id: 5,
    title: "Smart TV Samsung Series 7 UN50TU7000GCZB LED 4K 50\" 220V - 240V",
    price: 72999,
    img: "https://http2.mlstatic.com/D_NQ_NP_878604-MLA44160072739_112020-O.webp",
    images: ["https://http2.mlstatic.com/D_NQ_NP_892838-MLA44160072746_112020-O.webp", "https://http2.mlstatic.com/D_NQ_NP_917266-MLA44160386298_112020-O.webp"],
    stock: 30,
    seller: "Samsung",
    description: "Con el Smart TV UN50TU7000 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.",
    category: "televisores" ,
    sold: 12
  },
  {
    id: 6,
    title: "Smart Tv Noblex Dk43x5100 Led Full Hd 43",
    price: 41477,
    img: "https://http2.mlstatic.com/D_NQ_NP_848039-MLA47150751310_082021-O.webp",
    images: ["https://http2.mlstatic.com/D_NQ_NP_895937-MLA47150751314_082021-O.webp", "https://http2.mlstatic.com/D_NQ_NP_895451-MLA47150751308_082021-O.webp"],
    stock: 13,
    seller: "Noblex",
    description: "Noblex lleva más de 70 años creando bienestar en los hogares argentinos, lo que la convierte en una de las marcas con mayor historia y trayectoria del país. Ofrece una amplia gama de productos comprometidos con la calidad y la innovación tecnológica.\nCon el Smart TV DK43X5100 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.",
    category: "televisores",
    sold: 18
  },
  {
    id: 7,
    title: "Nintendo Switch 32GB Standard color rojo neón, azul neón y negro",
    price: 83999,
    img: "https://http2.mlstatic.com/D_NQ_NP_883371-MLA32731749246_112019-O.webp",
    images: ["https://http2.mlstatic.com/D_NQ_NP_770676-MLA32731813622_112019-O.webp", "https://http2.mlstatic.com/D_NQ_NP_865283-MLA32731749270_112019-O.webp"],
    stock: 11,
    seller: "Nintendo",
    description: "Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 32 GB.\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.",
    category: "videojuegos",
    sold: 23
  },
  {
    id: 8,
    title: "Sony PlayStation 5 825GB Standard color blanco y negro",
    price: 178216,
    img: "https://http2.mlstatic.com/D_NQ_NP_739160-MLA44484414453_012021-O.webp",
    images: ["https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp", "https://http2.mlstatic.com/D_NQ_NP_818099-MLA44484414456_012021-O.webp"],
    stock: 23,
    seller: "Sony",
    description: "Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB.\nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.",
    category: "videojuegos",
    sold: 30
  }
];

export default products;
