import { cargar_producto } from "./cargar_productos.js";

async function api_products(){
    try{
      
    const respuesta = await fetch('https://fakestoreapi.com/products') 
    const datos_json = await respuesta.json();
    
    cargar_producto(datos_json);

    }catch(error){
      console.log("Error en: ", error) 
    }
  }`
  `
  api_products();

  
