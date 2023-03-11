let X = 0
let Y = 0
basic.forever(function () {
    X = input.acceleration(Dimension.X)
    Y = input.acceleration(Dimension.Y)
    if (Math.abs(X) > 32) {
        basic.showIcon(IconNames.Sad)
    } else if (Y > 32) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
