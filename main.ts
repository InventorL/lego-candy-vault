// Wheel Servo: P1
// 
// Lock Servo: P2
// 
// Green LEDs: P0 (Active 1-5)
// 
// Keypad LEDs: P16 (Active: 1-3 6-8, 11-13)
// 
// Rows 11, 8, 9
// 
// Columns: 13, 14, 15
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
                greenled.setPixelColor(password.length, neopixel.colors(NeoPixelColors.Green))
                greenled.show()
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
function winner () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(2, neopixel.hsl(32, 255, 40))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(8, neopixel.hsl(246, 250, 30))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(11, neopixel.rgb(100, 0, 100))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Purple))
    strip.show()
    basic.pause(200)
    strip.setPixelColor(13, neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    control.reset()
}
function opencandy () {
    pins.servoWritePin(AnalogPin.P1, 115)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P1, 135)
    basic.pause(500)
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
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Locked == true) {
        pins.servoWritePin(AnalogPin.P2, 70)
        Locked = false
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
        Locked = true
    }
})
function ShowPattern () {
    greenled.setPixelColor(password.length, neopixel.colors(NeoPixelColors.Green))
    greenled.show()
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
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
        basic.pause(100)
    }
    greenled.setPixelColor(password.length, neopixel.colors(NeoPixelColors.Black))
    greenled.show()
}
let Guess_mode = false
let guess = ""
let password = ""
let greenled: neopixel.Strip = null
let strip: neopixel.Strip = null
let Locked = false
Locked = true
pins.servoWritePin(AnalogPin.P2, 0)
pins.servoWritePin(AnalogPin.P1, 135)
strip = neopixel.create(DigitalPin.P16, 14, NeoPixelMode.RGB)
greenled = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
greenled.showColor(neopixel.colors(NeoPixelColors.Black))
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
password = ""
guess = ""
Guess_mode = false
greenled.setBrightness(200)
basic.pause(1000)
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
    }
})
basic.forever(function () {
    if (Guess_mode == false) {
        if (password.length == 5) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
            greenled.setPixelColor(password.length, neopixel.colors(NeoPixelColors.Green))
            greenled.show()
            opencandy()
            winner()
        } else {
            password = "" + password + Letters._pickRandom()
            ShowPattern()
            basic.pause(500)
            Guess_mode = true
        }
    }
})
basic.forever(function () {
	
})
