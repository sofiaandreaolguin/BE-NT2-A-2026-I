const productos = [{nombre: "Teclado", precio: 100, stock: 5}, {nombre: "Mouse", precio: 50, stock: 0}, {nombre: "Monitor", precio: 300, stock: 2}];
p2= productos.filter(producto=>producto.stock >0)
console.log(p2);
//console.log(productos.filter(producto=>producto.stock >0));
prodscdesc = p2.map(
    producto => {
       nuevoPrecio = producto.precio * 90/100
        return (
            {
         ...producto,
         precio: nuevoPrecio
            }
        )
    }
)
console.log(prodscdesc);

let valorTotal = p2.reduce((acumulador, prod) =>  acumulador + prod.precio * prod.stock,0)

console.log(valorTotal);
const alumnos = [
  { nombre: "Ana", materias: ["Sistemas", "Redes"] },
  { nombre: "Pedro", materias: ["Programación", "Base de Datos"] },
  { nombre: "Lucía", materias: ["Sistemas", "Inglés"] }
];
materiastodos = alumnos.reduce((materias, alumno) => materias + alumno.materias +", " ,"");


materiasacumuladas = alumnos.reduce((totales, a)=>{
    let materiasAlumno = a.materias.join(", ");

return totales === "" ? materiasAlumno : totales + ", " + materiasAlumno ;},"");

console.log(materiasacumuladas);