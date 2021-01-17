while (true) {
    if (input.soundLevel() >= 150) {
        light.setAll(color.rgb(255, 0, 0))
    } else if (input.soundLevel() <= 100) {
        light.setAll(color.rgb(0, 255, 0))
    }
    
}
