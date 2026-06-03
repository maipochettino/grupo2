const boton = document.getElementById("modoOscuro");
boton.addEventListener("click", function(){
    document.body.classList.toggle("dark")
});

const btnbuscar = document.getElementById("btnbuscar");
btnbuscar.addEventListener("click", function(){
    let texto = document.getElementById("buscar").value
    .toLowerCase();
    const noticias = document.querySelectorAll(".noticia");
    noticias.forEach(function(noticia){
        let titulo = noticia.querySelector("h3").textContent.toLowerCase()
        if(titulo.includes(texto)){
            noticia.style.display="block";
        } else{
            noticia.style.display="none";
        }
    });
});

const botonesLeer =
document.querySelectorAll(".leerMas");
botonesLeer.forEach(function(boton){
    boton.addEventListener("click", function(){
        const noticia =
        boton.parentElement;
        const textoCompleto =
        noticia.querySelector(".completo");
        if(textoCompleto.style.display === "block"){
            textoCompleto.style.display = "none";
            boton.textContent =
            "Leer más";
        }
        else{
            textoCompleto.style.display =
            "block";
            boton.textContent =
            "Leer menos";
        }
    });
});
