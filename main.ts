/**
 * Wheel Servo: P1
 * 
 *  Lock Servo: P2
 * 
 * Green LEDs: P0 (Active 1-5)
 * 
 * Keypad LEDs: P16 (Active: 1-3 6-8, ,11-13)
 * 
 * Rows 11, 8, 9 
 * 
 * Columns: 13, 14, 15
 */
function Row3 () {
    while (pins.digitalReadPin(DigitalPin.P13) == 0) {
        strip.setPixelColor(11, neopixel.rgb(100, 0, 100))
        strip.show()
        basic.pause(500)
        ButtonPress("g")
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 0) {
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(500)
        ButtonPress("h")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 0) {
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(500)
        ButtonPress("i")
    }
}
function ButtonPress (letter: string) {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    for (let index = 0; index < 1; index++) {
        guess = "" + guess + letter
        if (password.includes(guess) && password.indexOf(guess) == 0) {
            if (guess.compare(password) == 0) {
                guess = ""
                Guess_mode = false
            }
        } else {
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(1000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            guess = ""
            ShowPattern()
        }
    }
}
function Row2 () {
    while (pins.digitalReadPin(DigitalPin.P13) == 0) {
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(500)
        ButtonPress("d")
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 0) {
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(500)
        ButtonPress("e")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 0) {
        strip.setPixelColor(8, neopixel.hsl(246, 250, 30))
        strip.show()
        basic.pause(500)
        ButtonPress("f")
    }
}
function Row1 () {
    while (pins.digitalReadPin(DigitalPin.P13) == 0) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
        ButtonPress("a")
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 0) {
        strip.setPixelColor(2, neopixel.hsl(32, 255, 40))
        strip.show()
        basic.pause(500)
        ButtonPress("b")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 0) {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(500)
        ButtonPress("c")
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
function ShowPattern () {
    if (Guess_mode == false) {
        for (let value of password) {
            if (value == "a") {
                strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else if (value == "b") {
                strip.setPixelColor(2, neopixel.hsl(32, 255, 40))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else if (value == "c") {
                strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else if (value == "d") {
                strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else if (value == "e") {
                strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else if (value == "f") {
                strip.setPixelColor(8, neopixel.hsl(246, 250, 30))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else if (value == "g") {
                strip.setPixelColor(11, neopixel.rgb(100, 0, 100))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else if (value == "h") {
                strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Purple))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            } else {
                strip.setPixelColor(13, neopixel.colors(NeoPixelColors.White))
                strip.show()
                basic.pause(500)
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
            }
        }
        Guess_mode = true
    }
}
let strip: neopixel.Strip = null
let Guess_mode = false
let guess = ""
let password = ""
let Letters = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i"
]
password = Letters._pickRandom()
guess = ""
Guess_mode = false
strip = neopixel.create(DigitalPin.P16, 14, NeoPixelMode.RGB)
let greenled = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P2, 70)
let Locked = true
pins.servoWritePin(AnalogPin.P1, 0)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
greenled.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    if (Locked == true) {
        while (input.magneticForce(Dimension.X) < 65 && input.magneticForce(Dimension.X) > 55) {
            pins.servoWritePin(AnalogPin.P2, 150)
            Locked = false
        }
    }
    if (Locked == false) {
        pins.servoWritePin(AnalogPin.P2, 70)
        Locked = true
    }
})
basic.forever(function () {
    if (Guess_mode == true) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        Row1()
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        Row2()
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        Row3()
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})