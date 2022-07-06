basic.showIcon(IconNames.Heart)
music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 843, 1342, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
})
