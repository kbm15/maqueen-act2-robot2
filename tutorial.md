# Actividad 2 Robot 2
```template
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


```
## ~avatar avatar

Nuestro problema se resuelve utilizando el bloque de entrada, que permite ejecutar una instruccion al pulsar un determinado boton.



## Paso 2

Arrastramos el bloque pulsar boton de la seccion entrada.
```block 
input.onButtonPressed(Button.A, function () {})
```

## Paso 3
Colocamos el codigo del bloque 'para siempre' dentro del bloque 'pulsar boton' y modifica la imagen.
```block 
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
```