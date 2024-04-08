const cambio = document.querySelector("#cambio");
const azul = document.querySelector("#azul")

cambio.onclick = function(){
azul.classList.toggle("azul");

}

$().ready(() => {
    $("#cambio2").click(function() {
        $("#rojo").toggleClass("rojo");
    

    });
});