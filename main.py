while True:
    if input.sound_level() >= 90:
        light.set_all(color.rgb(255,0,0))
    elif input.sound_level() < 90:
        light.set_all(color.rgb(0,255,0))