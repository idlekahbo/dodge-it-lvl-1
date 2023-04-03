def on_button_pressed_a():
    you.move(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global array_layer_1, _1, _2, _3, _5
    array_layer_1 = randint(1, 5)
    if array_layer_1 == 1:
        _1 = game.create_sprite(4, 1)
        _2 = game.create_sprite(4, 2)
        _3 = game.create_sprite(4, 3)
        _5 = game.create_sprite(4, 4)
    if array_layer_1 == 2:
        _1 = game.create_sprite(4, 0)
        _2 = game.create_sprite(4, 2)
        _3 = game.create_sprite(4, 3)
        _5 = game.create_sprite(4, 4)
    if array_layer_1 == 3:
        _1 = game.create_sprite(4, 0)
        _2 = game.create_sprite(4, 1)
        _3 = game.create_sprite(4, 3)
        _5 = game.create_sprite(4, 4)
    if array_layer_1 == 4:
        _5 = game.create_sprite(4, 0)
        _5 = game.create_sprite(4, 1)
        _5 = game.create_sprite(4, 2)
        _5 = game.create_sprite(4, 4)
    if array_layer_1 == 5:
        _5 = game.create_sprite(4, 0)
        _5 = game.create_sprite(4, 1)
        _5 = game.create_sprite(4, 2)
        _5 = game.create_sprite(4, 3)
    game.add_score(1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    you.move(-1)
input.on_button_pressed(Button.B, on_button_pressed_b)

_5: game.LedSprite = None
_3: game.LedSprite = None
_2: game.LedSprite = None
_1: game.LedSprite = None
array_layer_1 = 0
you: game.LedSprite = None
you = game.create_sprite(0, 2)
you.turn(Direction.RIGHT, 90)

def on_forever():
    if you.is_touching(_1) or you.is_touching(_2):
        game.game_over()
    if you.is_touching(_3) or you.is_touching(_5):
        game.game_over()
basic.forever(on_forever)

def on_forever2():
    if _1.get(LedSpriteProperty.X) == 0 and _1.get(LedSpriteProperty.Y) == 0:
        _1.delete()
    if _1.get(LedSpriteProperty.X) == 0 and _1.get(LedSpriteProperty.Y) == 1:
        _1.delete()
basic.forever(on_forever2)

def on_forever3():
    if _2.get(LedSpriteProperty.X) == 0 and _2.get(LedSpriteProperty.Y) == 1:
        _2.delete()
    if _2.get(LedSpriteProperty.X) == 0 and _2.get(LedSpriteProperty.Y) == 2:
        _2.delete()
basic.forever(on_forever3)

def on_forever4():
    if _3.get(LedSpriteProperty.X) == 0 and _3.get(LedSpriteProperty.Y) == 2:
        _3.delete()
    if _3.get(LedSpriteProperty.X) == 0 and _3.get(LedSpriteProperty.Y) == 3:
        _3.delete()
basic.forever(on_forever4)

def on_forever5():
    if _5.get(LedSpriteProperty.X) == 0 and _5.get(LedSpriteProperty.Y) == 3:
        _5.delete()
    if _5.get(LedSpriteProperty.X) == 0 and _5.get(LedSpriteProperty.Y) == 4:
        _5.delete()
basic.forever(on_forever5)
