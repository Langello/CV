let titulo = document.title;
window.addEventListener("blur", () => {
    document.title = "Vuelve";
    document.getElementById('iconoTitulo').href = "triste.ico";
});
window.addEventListener("focus" , () => {
    document.title=titulo;
    document.getElementById('iconoTitulo').href = "contento.ico";

})

let educacionVisible = false;
function mostrarOcultarEducacion() {

    educacionVisible == false? (
        document.getElementById("educacion").style.display = "inline",
        educacionVisible = true
    ):(
        document.getElementById("educacion").style.display = "none",
        educacionVisible = false
    );
}

let experienciaLaboralVisible = false;
function mostrarOcultarExperienciaLaboral() {

    experienciaLaboralVisible == false? (
        document.getElementById("experienciaLaboral").style.display= "inline",
        experienciaLaboralVisible = true
    ):(
        document.getElementById("experienciaLaboral").style.display = "none",
        experienciaLaboralVisible = false
    );
}



let idiomasVisible = false;
function mostrarOcultarIdiomas() {

    idiomasVisible == false? (
        document.getElementById("idiomas").style.display= "inline",
        idiomasVisible = true
    ):(
        document.getElementById("idiomas").style.display = "none",
        idiomasVisible = false
    );
}