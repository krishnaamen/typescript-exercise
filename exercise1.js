// const myName: string = "Krishna";
// console.log(myName);
// BagType
// - Add an enum named BagType with the values PAPER and CANVAS.
var bagType;
(function (bagType) {
    bagType[bagType["PAPER"] = 0] = "PAPER";
    bagType[bagType["CANVAS"] = 1] = "CANVAS";
})(bagType || (bagType = {}));
// PresentType
// - Add an enum named PresentType with the values SOFT and HARD
var PresentType;
(function (PresentType) {
    PresentType[PresentType["SOFT"] = 0] = "SOFT";
    PresentType[PresentType["HARD"] = 1] = "HARD";
})(PresentType || (PresentType = {}));
console.log(PresentType, bagType);
