basic.showIcon(IconNames.Diamond)
radio.setGroup(210)

basic.forever(function() {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
})