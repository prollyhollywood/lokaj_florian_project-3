while True:
    if input.sound_level() >= 175:
        light.set_all(color.rgb(255,0,255))
    elif input.sound_level() >= 140:
        light.set_all(color.rgb(255,255,0))
    else:
        light.set_all(color.rgb(0,255,255))