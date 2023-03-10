input.onButtonPressed(Button.A, function () {
    if (x == 2) {
        Puntos += 1
    }
})
input.onButtonPressed(Button.B, function () {
    Control = "pausa"
    basic.showNumber(Puntos)
    basic.pause(1000)
    basic.clearScreen()
    Control = "play"
})
let Control = ""
let x = 0
let Puntos = 0
Puntos = 0
x = 0
Control = "play"
led.plot(0, 2)
basic.forever(function () {
    if (Control == "play") {
        while (x <= 4) {
            x += 1
            led.plot(x, 2)
            basic.pause(100)
            basic.clearScreen()
        }
        while (x > 0) {
            x += -1
            led.plot(x, 2)
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
