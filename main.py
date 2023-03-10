# Wheel Servo: P1
# 
# Lock Servo: P2
# 
# Green LEDs: P0 (Active 1-5)
# 
# Keypad LEDs: P16 (Active: 1-3 6-8, 11-13)
# 
# Rows 11, 8, 9
# 
# Columns: 13, 14, 15
def Row3():
    while pins.digital_read_pin(DigitalPin.P13) == 0:
        strip.set_pixel_color(11, neopixel.rgb(100, 0, 100))
        strip.show()
        basic.pause(500)
        ButtonPress("g")
    while pins.digital_read_pin(DigitalPin.P14) == 0:
        strip.set_pixel_color(12, neopixel.colors(NeoPixelColors.PURPLE))
        strip.show()
        basic.pause(500)
        ButtonPress("h")
    while pins.digital_read_pin(DigitalPin.P15) == 0:
        strip.set_pixel_color(13, neopixel.colors(NeoPixelColors.WHITE))
        strip.show()
        basic.pause(500)
        ButtonPress("i")
def ButtonPress(letter: str):
    global guess, Guess_mode
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    for index in range(1):
        guess = "" + guess + letter
        if password.includes(guess) and password.index_of(guess) == 0:
            if guess.compare(password) == 0:
                guess = ""
                Guess_mode = False
        else:
            strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
            strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
            strip.set_pixel_color(7, neopixel.colors(NeoPixelColors.RED))
            strip.set_pixel_color(11, neopixel.colors(NeoPixelColors.RED))
            strip.set_pixel_color(13, neopixel.colors(NeoPixelColors.RED))
            strip.show()
            basic.pause(1000)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
            guess = ""
            ShowPattern()
def Row2():
    while pins.digital_read_pin(DigitalPin.P13) == 0:
        strip.set_pixel_color(6, neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
        basic.pause(500)
        ButtonPress("d")
    while pins.digital_read_pin(DigitalPin.P14) == 0:
        strip.set_pixel_color(7, neopixel.colors(NeoPixelColors.BLUE))
        strip.show()
        basic.pause(500)
        ButtonPress("e")
    while pins.digital_read_pin(DigitalPin.P15) == 0:
        strip.set_pixel_color(8, neopixel.hsl(246, 250, 30))
        strip.show()
        basic.pause(500)
        ButtonPress("f")
def winner():
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(2, neopixel.hsl(32, 255, 40))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.YELLOW))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(6, neopixel.colors(NeoPixelColors.GREEN))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(7, neopixel.colors(NeoPixelColors.BLUE))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(8, neopixel.hsl(246, 250, 30))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(11, neopixel.rgb(100, 0, 100))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(12, neopixel.colors(NeoPixelColors.PURPLE))
    strip.show()
    basic.pause(200)
    strip.set_pixel_color(13, neopixel.colors(NeoPixelColors.WHITE))
    strip.show()
    basic.pause(500)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    control.reset()
def Row1():
    while pins.digital_read_pin(DigitalPin.P13) == 0:
        strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
        strip.show()
        basic.pause(500)
        ButtonPress("a")
    while pins.digital_read_pin(DigitalPin.P14) == 0:
        strip.set_pixel_color(2, neopixel.hsl(32, 255, 40))
        strip.show()
        basic.pause(500)
        ButtonPress("b")
    while pins.digital_read_pin(DigitalPin.P15) == 0:
        strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.YELLOW))
        strip.show()
        basic.pause(500)
        ButtonPress("c")
def ShowPattern():
    greenled.set_pixel_color(len(password), neopixel.colors(NeoPixelColors.GREEN))
    greenled.show()
    for value in password:
        if value == "a":
            strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        elif value == "b":
            strip.set_pixel_color(2, neopixel.hsl(32, 255, 40))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        elif value == "c":
            strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.YELLOW))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        elif value == "d":
            strip.set_pixel_color(6, neopixel.colors(NeoPixelColors.GREEN))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        elif value == "e":
            strip.set_pixel_color(7, neopixel.colors(NeoPixelColors.BLUE))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        elif value == "f":
            strip.set_pixel_color(8, neopixel.hsl(246, 250, 30))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        elif value == "g":
            strip.set_pixel_color(11, neopixel.rgb(100, 0, 100))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        elif value == "h":
            strip.set_pixel_color(12, neopixel.colors(NeoPixelColors.PURPLE))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        else:
            strip.set_pixel_color(13, neopixel.colors(NeoPixelColors.WHITE))
            strip.show()
            basic.pause(500)
            strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    greenled.set_pixel_color(len(password), neopixel.colors(NeoPixelColors.BLACK))
    greenled.show_color(neopixel.colors(NeoPixelColors.BLACK))
Guess_mode = False
guess = ""
password = ""
greenled: neopixel.Strip = None
strip: neopixel.Strip = None
pins.servo_write_pin(AnalogPin.P2, 70)
Locked = True
pins.servo_write_pin(AnalogPin.P1, 0)
strip = neopixel.create(DigitalPin.P16, 14, NeoPixelMode.RGB)
greenled = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
greenled.show_color(neopixel.colors(NeoPixelColors.BLACK))
Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
password = ""
guess = ""
Guess_mode = False
basic.pause(1000)

def on_forever():
    if Guess_mode == True:
        pins.digital_write_pin(DigitalPin.P11, 0)
        Row1()
        pins.digital_write_pin(DigitalPin.P11, 1)
        pins.digital_write_pin(DigitalPin.P8, 0)
        Row2()
        pins.digital_write_pin(DigitalPin.P8, 1)
        pins.digital_write_pin(DigitalPin.P9, 0)
        Row3()
        pins.digital_write_pin(DigitalPin.P9, 1)
basic.forever(on_forever)

def on_forever2():
    global password, Guess_mode
    if Guess_mode == False:
        if len(password) == 5:
            music.play_sound_effect(music.builtin_sound_effect(soundExpression.twinkle),
                SoundExpressionPlayMode.IN_BACKGROUND)
            greenled.set_pixel_color(len(password), neopixel.colors(NeoPixelColors.GREEN))
            greenled.show()
            pins.servo_write_pin(AnalogPin.P1, 150)
            winner()
        else:
            greenled.set_pixel_color(len(password), neopixel.colors(NeoPixelColors.GREEN))
            greenled.show()
            basic.pause(500)
            password = "" + password + Letters._pick_random()
            ShowPattern()
            Guess_mode = True
basic.forever(on_forever2)

def on_forever3():
    global Locked
    if Locked == True:
        while input.magnetic_force(Dimension.X) < 115 and input.magnetic_force(Dimension.X) > 95:
            pins.servo_write_pin(AnalogPin.P2, 150)
            Locked = False
    else:
        pins.servo_write_pin(AnalogPin.P2, 70)
        Locked = True
basic.forever(on_forever3)
