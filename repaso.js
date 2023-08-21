const prueba = 'Pasear al perro';
export default prueba



// const persona = name => `El nombre es ${name}`

// const nombres = persona('Juan Roberto')
// console.log(`${nombres}`);

//------Object Literal
// const  persona = {
//     nombre:'Richard',
//     profesion:'Ing sistemas'
// }

// const nombres = persona
// console.log(this.nombre);


//-------object constructor
// function Tarea (nombre,urgencia){
//     this.nombre=nombre;
//     this.urgencia=urgencia;
// }

// Tarea.prototype.mostrarInformacion = function(){
//     return `la tarea es ${this.nombre} y la prioridad es ${this.urgencia}`
// }

// const task = new Tarea('Aprender React', 'Alto');
// console.log(task);

// const task1 = new Tarea('Aprender JS', 'Medio');
// console.log(task1);

//---->Prototype

// function Tarea (nombre,urgencia){
//     this.nombre=nombre;
//     this.urgencia=urgencia;
// }

// Tarea.prototype.mostrarInformacion = function(){
//     return `la tarea es ${this.nombre} y la prioridad es ${this.urgencia}`
// }
// const task1 = new Tarea('Aprender JS', 'Medio');
// console.log(task1);

//--->Destructuring
// const  persona = {
//     nombre:'Richard',
//     graduacion:['2021','2022'],
//     profesion:'Ing sistemas'
// }

// let {nombre} = persona.nombre;
// console.log(nombre);


//object key

// console.log(object.key(persona));





//----->areglos
//----->filtros

// const  personas =[
//     {nombre:'juan',lenguaje:'JS',edad:20 },
//     {nombre:'james',lenguaje:'JS',edad:30 },
//     {nombre:'Carolina',lenguaje:'JS',edad:23 },
// ]

// // console.log(personas);
// const edades = personas.filter(persona =>{
//     return persona.edad > 22
// })

// console.log(edades);

// const nombre = personas.find(persona =>{
//     return persona.nombre === 'james';
// })
// console.log(nombre);





//----->Promises



