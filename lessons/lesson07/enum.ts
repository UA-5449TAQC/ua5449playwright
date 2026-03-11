enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c); // Output: 1
enum ColorWithValuesRGB {
    Red = "FF0000",
    Green = "00FF00",
    Blue = "0000FF"
} 

let c2: ColorWithValuesRGB = ColorWithValuesRGB.Green;
console.log(c2); // Output: "00FF00"
c2 = ColorWithValuesRGB.Red;
console.log(c2); // Output: "FF0000"

function getColorName(color: Color): string {
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
function getColorName2(color: Color): string | undefined {
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

function printColor(color: ColorWithValuesRGB): void {
    console.log(`The color code is: ${color}`);
}
printColor(ColorWithValuesRGB.Green); // Output: "The color code is: 00FF00"
