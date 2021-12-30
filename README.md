# EveryMarket [![Netlify Status](https://api.netlify.com/api/v1/badges/9301f30b-76f7-4254-a7d6-98b2c0e48b54/deploy-status)](https://app.netlify.com/sites/frosty-roentgen-961eee/deploys)

 **Ingresa a la app:** https://frosty-roentgen-961eee.netlify.app/item/JuL7BwbqFGTv0YdAkxmz
## Aplicación para venta de productos electrónicos 
EveryMarket es una aplicación que está construida con ReactJs (generada con create-react-app) en el frontend y Firebase como base de datos. El objetivo es que los usuarios puedan comprar productos electrónicos. Nuestros productos están dividos en las siguientes categorías:
- Celulares.
- Computadoras y laptops.
- Televisores.
- Consolas y videojuegos.

## Librerías usadas:
- react: 17.0.2
- react-dom: 17.0.2
- react-router-dom: 6.0.2 **(Para la navegación)**
- react-bootstrap: 2.0.4 **(Para reusar componentes, por ejemplo: Modal, Carousel, Spinner, etc).**
- bootstrap: 5.1.3 **(Para aplicar estilos con clases).**
- firebase: 9.6.1 **(SDK de firebase para conectarse con la base de datos)**
- numeral: 2.0.6 **(Para dar formato a los precios)**

## Modelo de datos:
#### Products:
| Campo      | Data Type |
| ----------- | ----------- |
| Category      | String       |
| Description   | String        |
| DiscountPercentage   | Number        |
| Images   | Array<String>        |
| Img   | String        |
| Price   | Number        |
| Seller   | String        |
| Sold   | Number        |
| Stock   | Number        |
| Title   | String        |

#### Orders
Esta colección contiene información de las ventas realizadas.
| Campo      | Data Type |
| ----------- | ----------- |
| Buyer   | Map<{email: string, name: string, phone:string}>        |
| Date   | Timestamp        |
| Items   | Array<Map<{id: string, price: number, quantity: number, title: string}>>|
| Total   | Number        |
