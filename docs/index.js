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

let cursosVisible = false;
function mostrarOcultarCursos() {

    cursosVisible == false? (
        document.getElementById("cursos").style.display= "inline",
        cursosVisible = true
    ):(
        document.getElementById("cursos").style.display = "none",
        cursosVisible = false
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