function cargar_producto(lista_de_productos){

    lista_de_productos.forEach(element => {


        let eldiv = document.querySelector(".base_compra");

        let productos_base = document.createElement("div")

        productos_base.innerHTML = `

        <div class="elemento_producto" >
        
        <div class="imaganes"><img src="${element.image}" alt=""></div>
        <div class="descripcion">${element.description}</div>
        <div class="precio"> ${element.price} </div>
        </div>

        `
        
        eldiv.appendChild(productos_base);

    });

    
}
export{cargar_producto}