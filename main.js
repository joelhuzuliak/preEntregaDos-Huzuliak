let numeroAdivinar = 21
let numerosIngresados = []

function adivinarNumero() {

    for (let intentos = 1 ; intentos < 11 ; intentos++) {

        let preguntarNumero = Number(prompt("Adivina el numero del 1 al 100"))

        numerosIngresados.push(preguntarNumero)

        if (preguntarNumero === numeroAdivinar) {

            alert("Felicitaciones, adivinaste el numero " + numeroAdivinar + " en " + intentos + " intentos")
            return
        
        } else if (preguntarNumero < numeroAdivinar) {
        
            alert("El numero es mayor. Intento " + intentos + " /10")
            
        
        } else {
        
            alert("El numero es menor. Intento " + intentos + " /10")
            
        }

    }

    alert("¡Lo siento! Se acabaron los intentos. El numero era " + numeroAdivinar)
    alert("Los numeros ingresados fueron: " + numerosIngresados.join(", "))
}

adivinarNumero()