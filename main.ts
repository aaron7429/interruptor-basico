let luz = 0
input.onGesture(Gesture.Shake, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    if (luz == 0) {
        luz = 0
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            . # . # .
            . . # . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        luz = 0
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . # # .
            . . . # .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
	
})
