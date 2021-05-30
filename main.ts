input.onButtonPressed(Button.A, function () {
    // Si se presiona el botón A
    // disminuye en 1 la posición de la coordenada X asignada a la variable carril
    coordX += -1
    if (coordX < 0) {
        // condicional que evalúa los movimientos prohibidos por fuera del perímetro
        // muestra símbolo de X cuando se sale del perímetro
        basic.showIcon(IconNames.No)
        basic.pause(500)
        coordX = 0
    }
})
input.onButtonPressed(Button.B, function () {
    // Si se presiona el botón B
    coordX += 1
    if (coordX > 4) {
        // condicional que evalúa los movimientos prohibidos por fuera del perímetro
        // muestra símbolo de X cuando se sale del perímetro
        basic.showIcon(IconNames.No)
        basic.pause(500)
        coordX = 4
    }
})
function moverCarril (carril: number) {
    for (let index = 0; index <= 4; index++) {
        // repite el ciclo durante 4 veeces
        // grafica la coordenada x tomando los valores de y de la variable index del bucle por lo que la gráfica se hace de arriba hacia abajo
        led.plot(coordX, index)
        // pausa de 500 ms
        basic.pause(500)
    }
    basic.clearScreen()
}
let coordX = 0
// inicializa variable carril en cero
// asigna el valor de 2 al parámetro de carril para que lo tome la función
coordX = 2
// inicializa variable carril en cero
// asigna el valor de 2 al parámetro de carril para que lo tome la función
let carril = coordX
// asigna el valor de 2 al parámetro de carril para que lo tome la función
basic.forever(function () {
    // función para siempre
    // inicializa variable carril en 2
    // llama a la función moverCarril e inicia movimiento en el carril del medio al arrancar el programa
    moverCarril(coordX)
})
