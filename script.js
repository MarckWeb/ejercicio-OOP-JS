class Person {
    constructor(name, age){
        this.name= name;
        this.age = age;
    }

    datesPerson(){
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }

    adult(){
        console.log(
            (this.age >= 18)
                ?"the person is adult"
                :"the person is not adult"
        )
    };
    
}

const personOne = new Person("David", 20)
personOne.datesPerson()
personOne.adult()

//EJERCICIO 2

class Triangle {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    };

    longSide(){
        console.log(
        (this.x > this.y || this.x > this.z)
            ? `the longest side is: X=${this.x}`
            :(this.y > this.z)
                ?`the longest side is: Y=${this.y}`
                :`the longest side is: Z=${this.z}`
        )
    
    };
    
    isEquilateral(){
        console.log(
        (this.x === this.y && this.x === this.z) 
            ?`all sides are equal`
            :`the sides are not equal`
        )
    
    };


}

// class Triangle {
//     constructor(x, y, z) {
//       this.sides = [x, y, z];
//     }
  
//     longSide() {
//       const longest = Math.max(...this.sides);
//       console.log(`the longest side is: ${longest}`);
//     }
  
//     isEquilateral() {
//         console.log(
//         (this.sides.every((side) => side === this.sides[0]))
//             ? "all sides are equal" 
//             : "the sides are not equal"
//         )
      
//     }
//   }

const triangleOne = new Triangle(10,20,10)
console.log(triangleOne)
triangleOne.longSide()
triangleOne.isEquilateral()


const triangleTwo = new Triangle(50, 40, 30)
console.log(triangleTwo);
triangleTwo.longSide();
triangleTwo.isEquilateral();

//EJERCICIO 3

class Punto {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    meetingPoints(){
        let cuadrante = 0;

        if (this.x === 0 || this.y === 0) {
            cuadrante = (this.x > 0) 
            ? ((this.y > 0) 
                ? 1 
                : 4) 
            : ((this.y > 0) 
                ? 2 
                : 3);
        }
        
        (cuadrante === 0) 
            ?console.log("Los números introducidos no están en ninguno de los cuatro cuadrantes.")
            :console.log(`Los números introducidos están en el cuadrante ${cuadrante}.`);
    }
        // if(this.x === 0 || this.y === 0){
        //     return cuadrante = 0;
        // }else if(this.x > 0){
        //     (this.y > 0)
        //         ? cuadrante = '1er cuadrante'
        //         : cuadrante = '4to cuadrante'
        // }else{
        //     (this.y > 0)
        //         ? cuadrante = '2do cuadrante'
        //         : cuadrante = '3er cuadrante'
        // }

        // (cuadrante === 0)
        //     ? console.log('error no hay cuadrantes')
        //     : console.log(`los numeros x:${this.x} y:${this.y} estan en el cuadrante ${cuadrante}`)


        // if(this.x > 0 && this.y > 0){
        //     console.log(`Los puntos x:${this.x} y:${this.y} 1er cuadrante`)
        // }else if(this.x < 0 && this.y > 0){
        //     console.log(`Los puntos x:${this.x} y:${this.y} 2do cuadrante`)
        // }else if(this.x < 0 && this.y < 0){
        //     console.log(`Los puntos x:${this.x} y:${this.y} 3er cuadrante`)
        // }else if(this.x > 0 && this.y < 0){
        //     console.log(`Los puntos x:${this.x} y:${this.y} 4to cuadrante`)
        // }else{
        //     console.log('Los puntos no existen')
        // }
}
//}

primerPunto = new Punto(parseInt(prompt('Intro a number x')), parseInt(prompt('Intro a number y')))
console.log(primerPunto)
primerPunto.meetingPoints()

//EJERCICIO 4
class Square {
    constructor(side){
        this.side = side;
    }

    // valueSide(){
    // parseFloat(prompt('ingresa lado del cuadrado'))
    // }

    surfacePerimeter(){
        console.log(`perimetro = ${this.side * 4}`, `superficie = ${this.side * 2}`)
    }
}

const squareOne = new Square(4)
squareOne.surfacePerimeter()

//EJECICIO 5
class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    //imprimri datos
    printData(){
        console.log(`Name: ${this.name} salary:${this.salary}`)
    }
    //pagar
    pay(){
        console.log(
        (this.salary >= 3000)
            ?'pagar impuestos'
            :'no pagar impuestos'
        )
    }
}

const employeeOne = new Employee('Peio', 5000);
employeeOne.printData()
employeeOne.pay()

const employeeTwo = new Employee('David', 1000);
employeeTwo.printData()
employeeTwo.pay()

//EJERCICIO 6
class Operation {
    constructor(valueOne, valueTwo){
        this.valueOne = valueOne;
        this.valueTwo = valueTwo;
    }

    sumar(){
        console.log(`sumados son ${this.valueOne + this.valueTwo} `)
    }

    restar(){
        console.log(`restados son ${this.valueOne - this.valueTwo} `)
    }

    multiplicar(){
        console.log(`multiplicados son ${this.valueOne * this.valueTwo} `)
    }

    dividir(){
        console.log(`divididos son ${this.valueOne / this.valueTwo} `)
    }
}

const suma = new Operation(5, 5)
suma.sumar()
suma.restar()
suma.multiplicar()
suma.dividir()
