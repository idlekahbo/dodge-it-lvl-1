input.onButtonPressed(Button.A, function () {
    you.move(1)
})
input.onButtonPressed(Button.AB, function () {
    array_layer_1 = randint(1, 5)
    if (array_layer_1 == 1) {
        _1 = game.createSprite(4, 1)
        _2 = game.createSprite(4, 2)
        _3 = game.createSprite(4, 3)
        _5 = game.createSprite(4, 4)
    }
    if (array_layer_1 == 2) {
        _1 = game.createSprite(4, 0)
        _2 = game.createSprite(4, 2)
        _3 = game.createSprite(4, 3)
        _5 = game.createSprite(4, 4)
    }
    if (array_layer_1 == 3) {
        _1 = game.createSprite(4, 0)
        _2 = game.createSprite(4, 1)
        _3 = game.createSprite(4, 3)
        _5 = game.createSprite(4, 4)
    }
    if (array_layer_1 == 4) {
        _5 = game.createSprite(4, 0)
        _5 = game.createSprite(4, 1)
        _5 = game.createSprite(4, 2)
        _5 = game.createSprite(4, 4)
    }
    if (array_layer_1 == 5) {
        _5 = game.createSprite(4, 0)
        _5 = game.createSprite(4, 1)
        _5 = game.createSprite(4, 2)
        _5 = game.createSprite(4, 3)
    }
})
input.onButtonPressed(Button.B, function () {
    you.move(-1)
})
let array_layer_1 = 0
let you: game.LedSprite = null
let _5: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
you = game.createSprite(0, 2)
you.turn(Direction.Right, 90)
basic.forever(function () {
    _1.move(-1)
    _2.move(-1)
    _3.move(1)
    _5.move(1)
})
