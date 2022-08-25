//Creo variable con array de todas las propiedades close
let close = document.querySelectorAll(".close");
//creo loop para que se ejecute con cada propiedad dentro del array
close.forEach(function(cerrar) {
    //Elimino la redireccion del click con prevent default
    cerrar.addEventListener('click', function(ev) {
        ev.preventDefault();
        //Hago que la anumacion de entrada se elimine y se ejecute la animacion de salida con el click
        let content = document.querySelector(".content");
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeIn");

        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOut");
        setTimeout(() => {
            location.href = "/ranking"

        }, 600);

        return false

    })
});