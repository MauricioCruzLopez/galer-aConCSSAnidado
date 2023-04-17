const imagen1 = document.getElementById("imagen1");
const art1eliminado = imagen1;

const autor1 = document.getElementById("autor1");
const autor1eliminado = autor1;

const carta1 = document.getElementById("carta1");

imagen1.addEventListener("click",()=>{ //da vuelta la carta para que se vea el autor
    imagen1.remove();
    autor1.classList.toggle("div-desactivado"); 
    autor1.classList.toggle("div-activado");
    if(autor1.parentElement === null){
        carta1.appendChild(autor1eliminado);
    }
});
autor1.addEventListener("click", ()=>{ //da vuelta la carta para que se vea la imagen
    autor1.remove();
    carta1.appendChild(art1eliminado);
});     




