// BASE DE DATOS DE ALMUNOS CON SUS NOTAS EN UN SEMESTRE, TRIMESTRE O CUATRIMESTRE de Jonathan Martinez - Segunda Entrega//

// Funcion encargada de tomar todas las notas ingresadas y devolver una nota final
function calculadorNotas (){
    let count = 0;
    let periodo = prompt("Cuantos meses tiene el periodo? \nPuede ingresar (3, 4 o 6)")
    if (periodo == 3 || periodo == 4 || periodo == 6){
        for (let i = 1; i <= periodo; i++){
            notas = parseFloat ( prompt ("Ingresar nota #" + i + ":") );
            while (notas < 0 || notas > 100 ){
                notas = parseFloat (prompt("Valor incorrecto, volver a ingresar la nota #" + i + ":"));
            }
            count += notas;
        }
    }else {
        alert("Valor incorrecto. Por favor intentar de nuevo.");
        return calculadorNotas();
    }
    return count / periodo;
}

//Funcion encargada de asignarle una letra a la nota final
function calculadorLetra (notas){
    if (notas >= 90){
        return "A";
    }else if ( notas >= 80){
        return "B";
    }else if ( notas >= 70){
        return "C";
    }else if ( notas >= 60){
        return "D";
    }else{
        return "F";
    }
}

//Declaracion de la clase para el objeto que vamos a utilizar
class Alumno {
    constructor(nombre, edad, nota){
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }

    get_datos(){
        alert(`Nombre: ${this.nombre} \nEdad: ${this.edad} \nNota: ${this.nota}`);
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setEdad(edad){
        this.edad = edad;
    }
    setNota(nota){
        this.nota = nota;
    }
}
function isStudent (estudiante){
    return estudiante.nombre == estudianteBusqueda;

}

// Declaracion de arreglo

let students = [];

// Declaracion de variables que voy a usar
let opcion;
let estudianteBusqueda;
let resultadoBusqueda;

// Agregando datos a nuestro arreglo para prueba
students.push(new Alumno("Jose", 24, "B"));
students.push(new Alumno("Pedro", 34, "A"));
students.push(new Alumno("Thomas", 14, "C"));

// bucle encargado de repetirse hasta que se termine el programa

while(opcion != 5){
    opcion = prompt("1) Agregar un nuevo alumno \n2) Ver lista de alumnos \n3) Buscar si el alumno esta en la base de datos \n4) Borrar Alumno \n5) SALIR \n Que desea realizar?: ");
    if(opcion == 1){  
            let name = prompt("Introduzca nombre:");
            let age = prompt("Introduzca la edad");
            let nota = calculadorLetra(calculadorNotas());
            let estudiante = new Alumno (name, age, nota);
            students.push(estudiante);
    }else if(opcion == 2){
        for (let alumno of students){
            alumno.get_datos();
        }
    }else if (opcion == 3){
        estudianteBusqueda = prompt ("Ingrese el nombre del estudiante que desea buscar: ");
        resultadoBusqueda = students.find(isStudent);
        if (resultadoBusqueda){
            let actualizarOpcion = prompt(`El alumno ${estudianteBusqueda} se encuentra en la base de datos \n1)Actualizar Nombre \n2)Actualizar edad \n3)Actualizar nota \n4)RETORNAR \nQue desea realizar?`);
            if (actualizarOpcion == 1){
                resultadoBusqueda.setNombre(prompt("Introduzca un nuevo nombre"));
            }else if (actualizarOpcion == 2){
                resultadoBusqueda.setEdad(prompt("Introduzca una nueva Edad"));
            }else if (actualizarOpcion == 3){
                resultadoBusqueda.setNota(calculadorLetra(calculadorNotas()));
            }else if (actualizarOpcion == 4){
                continue;
            }else {
                alert("Opcion incorrecta.");
            }
        }else {
            alert(`El alumno ${estudianteBusqueda} NO se encuentra en la base de datos`);
        }
    }else if(opcion == 4){
        estudianteBusqueda = prompt("Introduzca el estudiante que desea borrar: ");
        resultadoBusqueda = students.find(isStudent);
            if (resultadoBusqueda){
                students = students.filter((person) => person.nombre != estudianteBusqueda);
                alert(`El alumno ${estudianteBusqueda} fue borrado de la base de datos`);
            }
            else{
                alert(`El alumno ${estudianteBusqueda} NO se encuentra en la base de datos`);
            }
    }else if (opcion == 5 ){
        break;
    }else{
            alert("Opcion incorrecta, intente de nuevo.");
    }
}
