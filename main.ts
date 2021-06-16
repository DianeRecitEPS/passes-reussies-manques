input.onButtonPressed(Button.A, function () {
    Réussi += 1
    basic.showNumber(Réussi)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showNumber(Réussi)
})
input.onButtonPressed(Button.B, function () {
    Manqué += 1
    basic.showNumber(Manqué)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pourcentage = Réussi + (Manqué + Réussi * 100)
    basic.showNumber(pourcentage)
})
let pourcentage = 0
let Manqué = 0
let Réussi = 0
Réussi = 0
Manqué += 0
basic.forever(function () {
	
})
