def on_button_pressed_a():
    you.move(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global array_layer_1
    array_layer_1 = randint(0, 5)
    if (0) == (1):
        pass
    if (0) == (2):
        pass
    if (0) == (3):
        pass
    if True:
        pass
    if True:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    you.move(-1)
input.on_button_pressed(Button.B, on_button_pressed_b)

array_layer_1 = 0
you: game.LedSprite = None
you = game.create_sprite(0, 2)
you.turn(Direction.RIGHT, 90)