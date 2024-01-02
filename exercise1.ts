// const myName: string = "Krishna";
// console.log(myName);

// 1. BagType
// - Add an enum named BagType with the values PAPER and CANVAS.

enum BagType{
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

// 4.  Bag
// - Add a class named Bag. Add the attributes: maxWeight (number), bagType (BagType) and an array of Presents (Class that will be added later).
// - Add a contructor where it is possible to set the first two attributes by sending in parameters in the constructor.
// - Add a method named addPresent that takes a parameter of the type Present and adds the object to the array of presents.

class Bag{
    private maxWeight:number;
    private bagType: BagType;
    private presents: Present[] = [];

    constructor(maxWeight:number, bagType:BagType, presents:[Present]){
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = presents;
    }

addPresent(present:Present):void{
    this.presents.push(present);

}
}

// 5. Santa
// - Add a class named Santa. Add the attributes String name and int age.
// - Add a constructor where it is possible to set the attributes by sending in the parameters in the constructor.

class Santa{
    private name: string;
    private age: number;

    constructor( name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

