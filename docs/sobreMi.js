let titulo = document.title;
window.addEventListener("blur", () => {
    document.title = "Vuelve";
    document.getElementById('iconoTitulo').href = "triste.ico";
});
window.addEventListener("focus" , () => {
    document.title=titulo;
    document.getElementById('iconoTitulo').href = "contento.ico";

})


