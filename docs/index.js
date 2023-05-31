let titulo = document.title;
window.addEventListener("blur", () => {
    document.title = "Vuelve";
    document.getElementById('iconoTitulo').href = "triste.ico";
});
window.addEventListener("focus" , () => {
    document.title=titulo;
    document.getElementById('iconoTitulo').href = "contento.ico";

})

let articulosVisibles = {
    educacion: false,
    experienciaLaboral: false,
    idiomas: false,
    sobreMi: false
  };
  
function mostrarOcultarArticulo(articulo) {
    const icon = document.getElementById(`icon${articulo}`);
    const article = document.getElementById(`${articulo}Article`);
  
    articulosVisibles[articulo] = !articulosVisibles[articulo];
  
    if (articulosVisibles[articulo]) {
      article.style.display = "inline";
      icon.classList.remove("fa-arrow-down");
      icon.classList.add("fa-arrow-up");
    } else {
      article.style.display = "none";
      icon.classList.remove("fa-arrow-up");
      icon.classList.add("fa-arrow-down");
    }
  }