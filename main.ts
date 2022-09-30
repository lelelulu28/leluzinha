input.onPinPressed(TouchPin.P0, function () {
    tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(2000, 7000))
    basic.showIcon(IconNames.Heart)
})
input.onPinPressed(TouchPin.P2, function () {
    if (tocar) {
        tocar = true
        conte_2 = 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (tocar) {
        tocar = true
        conte += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let tocar = false
let conte_2 = 0
let conte = 0
conte_2 = 0
basic.forever(function () {
    if (conte == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
        }
        basic.showString("player 1 win!")
        conte = 0
        conte_2 = 0
    }
})
basic.forever(function () {
    if (conte_2 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
        }
        basic.showString("player 2 win!")
        conte = 0
        conte_2 = 0
    }
})
