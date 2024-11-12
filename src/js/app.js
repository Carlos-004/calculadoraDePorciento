const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",prevenir)

function prevenir(e){
    e.preventDefault();

    const botonPorciento = document.querySelector(".bnt-porciento")
    botonPorciento.addEventListener("click",calcular);

    function calcular(){
    
        const inputPrecio = document.querySelector("#precio");
        const inputPorciento = document.querySelector("#porciento");
        const porcientoTotal = document.querySelector(".porciento-total");
    
        const precio = Number(inputPrecio.value);
        const porciento  = Number(inputPorciento.value);

        if (inputPrecio.value === "" || inputPorciento.value === "") {
            return porcientoTotal.innerHTML = `Por favor llene ambos campos`
        }

        if (porciento > precio) {
            return porcientoTotal.innerHTML = `No te voy adar los productos gratis`
        }

        const calcularPorciento = Math.floor(precio - (precio * porciento / 100));
        return porcientoTotal.innerHTML = `El porciento es de %${calcularPorciento}`
        
    }
}
