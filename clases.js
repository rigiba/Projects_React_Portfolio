import prueba from './repaso.js';
console.log(prueba);



//clases


// class Tarea{
//     constructor(nombre, profesion){
//         this.nombre = nombre
//         this.profesion = profesion
//     }
//     mostrar(){
//         return `Aca esta el nombre: ${this.nombre} y profesion: ${this.profesion} `
//     }
// }


// let tarea1 = new Tarea('Richard', 'Ing sistemas')
// let tarea2 = new Tarea('Carolina', 'Abogada')


// console.log(tarea1.mostrar())
// console.log(tarea2.mostrar())


class Consolas{
    constructor(console, year){
        this.console = console
        this.year = year
    }
}

const listado = new Consolas ('xbox', '2012')
const listado1 = new Consolas ('Play', '2002')

console.log(listado);
console.log(listado1);

