while (true) {
    if (input.soundLevel() >= 90) {
        light.setAll(color.rgb(255, 0, 0))
    } else if (input.soundLevel() < 90) {
        light.setAll(color.rgb(0, 255, 0))
    }
    
}
