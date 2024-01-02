// const myName: string = "Krishna";
// console.log(myName);

// 1. BagType
// - Add an enum named BagType with the values PAPER and CANVAS.

enum bagType{
    PAPER,
    CANVAS
}

//2.  PresentType
// - Add an enum named PresentType with the values SOFT and HARD

enum PresentType {
    SOFT,
    HARD
}

console.log(PresentType, bagType);


// 3. Present
// - Add a class named Present. Add the attributes: name (string), weight (number) and presentType (PresentType).
// - Add a constructor where it is possible to set the the three attributes by sending in parameters in the constructor.
// - Add a method to get the presentType.
// - Add a method to get the weight.

 class Present{
    private name : string;
    private weight: number;
    private presentType: PresentType
    
    constructor(name:string,weight:number,presentType:PresentType){
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }

     getPresentType(): PresentType{
       return  this. presentType;
    }
    getWeight(): number{
        return this.weight;
    }



 }