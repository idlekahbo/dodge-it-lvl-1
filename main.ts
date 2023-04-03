input.onButtonPressed(Button.A, function () {
    you.move(1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        array_layer_1 = randint(1, 5)
        if (array_layer_1 == 1) {
            _1 = game.createSprite(4, 1)
            _2 = game.createSprite(4, 2)
            _3 = game.createSprite(4, 3)
            _5 = game.createSprite(4, 4)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _3.move(-1)
            _2.move(-1)
            _5.move(-1)
            if (you.isTouching(_1) || you.isTouching(_2)) {
                game.gameOver()
            }
            if (you.isTouching(_3) || you.isTouching(_5)) {
                game.gameOver()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 0) {
                _1.delete()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 1) {
                _1.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 1) {
                _2.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 2) {
                _2.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 3) {
                _5.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 4) {
                _5.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 2) {
                _3.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 3) {
                _3.delete()
            }
        }
        if (array_layer_1 == 2) {
            _1 = game.createSprite(4, 0)
            _2 = game.createSprite(4, 2)
            _3 = game.createSprite(4, 3)
            _5 = game.createSprite(4, 4)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _3.move(-1)
            _2.move(-1)
            _5.move(-1)
            if (you.isTouching(_1) || you.isTouching(_2)) {
                game.gameOver()
            }
            if (you.isTouching(_3) || you.isTouching(_5)) {
                game.gameOver()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 0) {
                _1.delete()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 1) {
                _1.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 1) {
                _2.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 2) {
                _2.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 3) {
                _5.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 4) {
                _5.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 2) {
                _3.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 3) {
                _3.delete()
            }
        }
        if (array_layer_1 == 3) {
            _1 = game.createSprite(4, 0)
            _2 = game.createSprite(4, 1)
            _3 = game.createSprite(4, 3)
            _5 = game.createSprite(4, 4)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _3.move(-1)
            _2.move(-1)
            _5.move(-1)
            if (you.isTouching(_1) || you.isTouching(_2)) {
                game.gameOver()
            }
            if (you.isTouching(_3) || you.isTouching(_5)) {
                game.gameOver()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 0) {
                _1.delete()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 1) {
                _1.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 1) {
                _2.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 2) {
                _2.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 3) {
                _5.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 4) {
                _5.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 2) {
                _3.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 3) {
                _3.delete()
            }
        }
        if (array_layer_1 == 4) {
            _5 = game.createSprite(4, 0)
            _5 = game.createSprite(4, 1)
            _5 = game.createSprite(4, 2)
            _5 = game.createSprite(4, 4)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _3.move(-1)
            _2.move(-1)
            _5.move(-1)
            if (you.isTouching(_1) || you.isTouching(_2)) {
                game.gameOver()
            }
            if (you.isTouching(_3) || you.isTouching(_5)) {
                game.gameOver()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 0) {
                _1.delete()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 1) {
                _1.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 1) {
                _2.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 2) {
                _2.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 3) {
                _5.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 4) {
                _5.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 2) {
                _3.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 3) {
                _3.delete()
            }
        }
        if (array_layer_1 == 5) {
            _5 = game.createSprite(4, 0)
            _5 = game.createSprite(4, 1)
            _5 = game.createSprite(4, 2)
            _5 = game.createSprite(4, 3)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _5.move(-1)
            basic.pause(1000)
            _1.move(-1)
            _3.move(-1)
            _2.move(-1)
            _5.move(-1)
            if (you.isTouching(_1) || you.isTouching(_2)) {
                game.gameOver()
            }
            if (you.isTouching(_3) || you.isTouching(_5)) {
                game.gameOver()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 0) {
                _1.delete()
            }
            if (_1.get(LedSpriteProperty.X) == 0 && _1.get(LedSpriteProperty.Y) == 1) {
                _1.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 1) {
                _2.delete()
            }
            if (_2.get(LedSpriteProperty.X) == 0 && _2.get(LedSpriteProperty.Y) == 2) {
                _2.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 3) {
                _5.delete()
            }
            if (_5.get(LedSpriteProperty.X) == 0 && _5.get(LedSpriteProperty.Y) == 4) {
                _5.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 2) {
                _3.delete()
            }
            if (_3.get(LedSpriteProperty.X) == 0 && _3.get(LedSpriteProperty.Y) == 3) {
                _3.delete()
            }
        }
        game.setScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    you.move(-1)
})
let _5: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
let array_layer_1 = 0
let you: game.LedSprite = null
you = game.createSprite(0, 2)
you.turn(Direction.Right, 90)
game.setScore(0)
