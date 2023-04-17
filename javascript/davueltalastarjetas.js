const galeria = document.querySelectorAll("#galeria > .arte"); //son todas las cartas
const imagenes = document.querySelectorAll("#galeria .img-activado"); //son todas las imagenes
const continesLosAutores = document.querySelectorAll("#galeria img+div"); //son todos contenedores de las referencias de los autores

for (let index = 0; index < imagenes.length; index++) {
    imagenes[index].addEventListener("click",()=>{
        const art1eliminado = imagenes[index];
        imagenes[index].remove();
        continesLosAutores[index].classList.toggle("div-desactivado");
        continesLosAutores[index].classList.toggle("div-activado");

        if(continesLosAutores[index].parentElement === null){ //para una ves se borra el contenedor de autores se puede cargar de vuelta
            const autor1eliminado = continesLosAutores[index];
            galeria[index].appendChild(autor1eliminado);
        }
    });
    
}
for (let index = 0; index < continesLosAutores.length; index++) {
    continesLosAutores[index].addEventListener("click", ()=>{ //da vuelta la carta para que se vea la imagen
        continesLosAutores[index].classList.toggle("div-desactivado");
        continesLosAutores[index].classList.toggle("div-activado");
        const imagenEliminada = imagenes[index];
        continesLosAutores[index].remove();
        galeria[index].appendChild(imagenEliminada);
    });
    
}


