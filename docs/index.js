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
    const iconEducacion = document.getElementById("iconEducacion")
    educacionVisible == false? (
        document.getElementById("educacionArticle").style.display = "inline",
        educacionVisible = true,
        iconEducacion.classList.remove("fa-arrow-down"),
        iconEducacion.classList.add("fa-arrow-up")
    ):(
        document.getElementById("educacionArticle").style.display = "none",
        educacionVisible = false,
        iconEducacion.classList.remove("fa-arrow-up"),
        iconEducacion.classList.add("fa-arrow-down")
    );
}

let experienciaLaboralVisible = false;
function mostrarOcultarExperienciaLaboral() {
    const iconExperienciaLboral= document.getElementById("iconExperienciaLaboral")
    experienciaLaboralVisible == false? (
        document.getElementById("experienciaLaboralArticle").style.display= "inline",
        experienciaLaboralVisible = true,
        iconExperienciaLboral.classList.remove("fa-arrow-down"),
        iconExperienciaLboral.classList.add("fa-arrow-up")
    ):(
        document.getElementById("experienciaLaboralArticle").style.display = "none",
        experienciaLaboralVisible = false,
        iconExperienciaLboral.classList.remove("fa-arrow-up"),
        iconExperienciaLboral.classList.add("fa-arrow-down")
    );
}



let idiomasVisible = false;
function mostrarOcultarIdiomas() {
    const iconIdiomas= document.getElementById("iconIdiomas")
    idiomasVisible == false? (
        document.getElementById("idiomasArticle").style.display= "inline",
        idiomasVisible = true,
        iconIdiomas.classList.remove("fa-arrow-down"),
        iconIdiomas.classList.add("fa-arrow-up")
    ):(
        document.getElementById("idiomasArticle").style.display = "none",
        idiomasVisible = false,
        iconIdiomas.classList.remove("fa-arrow-up"),
        iconIdiomas.classList.add("fa-arrow-down")
    );
}

let sobreMiVisible = false;
function mostrarOcultarSobreMi() {
    const iconSobreMi= document.getElementById("iconSobreMi")
    sobreMiVisible == false? (
        document.getElementById("sobreMiArticle").style.display= "inline",
        sobreMiVisible = true,
        iconSobreMi.classList.remove("fa-arrow-down"),
        iconSobreMi.classList.add("fa-arrow-up")
    ):(
        document.getElementById("sobreMiArticle").style.display = "none",
        sobreMiVisible = false,
        iconSobreMi.classList.remove("fa-arrow-up"),
        iconSobreMi.classList.add("fa-arrow-down")
    );
}