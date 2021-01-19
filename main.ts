while (true) {
    if (input.soundLevel() >= 175) {
        light.setAll(color.rgb(255, 0, 255))
    } else if (input.soundLevel() >= 140) {
        light.setAll(color.rgb(255, 255, 0))
    } else {
        light.setAll(color.rgb(0, 255, 255))
    }
    
}
