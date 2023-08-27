function geraImpares() {
    debugger;
    var numero = parseInt(document.querySelector("#numero").value);

    const numeros = document.querySelector("#pNumeros");
    numeros.innerHTML = "";
    for (x=1;x <= numero;x++) {
        console.log(x);
        if ((x % 2) != 0 ) {
            numeros.innerHTML += x + "<br>";
        } 
    }
}