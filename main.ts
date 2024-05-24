basic.showIcon(IconNames.Diamond)
radio.setGroup(210)

let block: boolean = false

input.onButtonPressed(Button.AB, function() {
    block = !block
    if (block) {
        radio.sendValue("block", 1)
    } else {
        radio.sendValue("unblock", 0)
    }
})
/*input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("main", 0)
})*/

input.onButtonPressed(Button.A, function () {
    radio.sendValue("buttonA", 0)
})

input.onButtonPressed(Button.B, function () {
    radio.sendValue("buttonB", 0)
})


basic.forever(function () {
    if (!block) {
        radio.sendValue("mgx", input.acceleration(Dimension.X))
        radio.sendValue("mgy", input.acceleration(Dimension.Y))
    }
})
