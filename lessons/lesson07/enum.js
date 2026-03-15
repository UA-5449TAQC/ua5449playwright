var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // Output: 1
var ColorWithValuesRGB;
(function (ColorWithValuesRGB) {
    ColorWithValuesRGB["Red"] = "FF0000";
    ColorWithValuesRGB["Green"] = "00FF00";
    ColorWithValuesRGB["Blue"] = "0000FF";
})(ColorWithValuesRGB || (ColorWithValuesRGB = {}));
var c2 = ColorWithValuesRGB.Green;
console.log(c2); // Output: "00FF00"
c2 = ColorWithValuesRGB.Red;
console.log(c2); // Output: "FF0000"
function getColorName(color) {
    switch (color) {
        case Color.Red:
            return "Red";
        case Color.Green:
            return "Green";
        case Color.Blue:
            return "Blue";
        default:
            return "Unknown";
    }
}
function getColorName2(color) {
    switch (color) {
        case Color.Red:
            return "Red";
        case Color.Green:
            return "Green";
        case Color.Blue:
            return "Blue";
    }
}
console.log(getColorName(Color.Green)); // Output: "Green"
function printColor(color) {
    console.log("The color code is: ".concat(color));
}
printColor(ColorWithValuesRGB.Green); // Output: "The color code is: 00FF00"
